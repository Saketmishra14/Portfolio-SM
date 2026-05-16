// hooks/useTestimonials.js
// Fetches testimonials from Google Sheets REST API
// Converts flat rows into structured objects
// Handles loading, error, cache, and auto-refresh

import { useState, useEffect, useCallback, useRef } from "react";

const SPREADSHEET_ID =
  import.meta.env.VITE_SHEETS_ID ??
  import.meta.env.VITE_REACT_APP_SHEETS_ID ??
  "";
const API_KEY =
  import.meta.env.VITE_SHEETS_KEY ??
  import.meta.env.VITE_REACT_APP_SHEETS_KEY ??
  "";
const SHEET_NAME = import.meta.env.VITE_SHEETS_NAME?.trim() || "Form Responses 1";
const CACHE_KEY = "testimonials_cache_v2";
const CACHE_TTL = 24 * 60 * 60 * 1000;
const AUTO_REFRESH_INTERVAL = 24 * 60 * 60 * 1000;

const COLUMN_MAP = {
  0: "timestamp",
  1: "clientName",
  2: "companyName",
  3: "projectName",
  4: "reviewMessage",
  5: "rating",
  6: "photoUrl",
  7: "permissionGranted",
};

function normalizeCell(value) {
  return typeof value === "string" ? value.trim() : String(value ?? "").trim();
}

export function extractDriveFileId(value) {
  const normalized = normalizeCell(value);
  if (!normalized) return "";

  try {
    const url = new URL(normalized);
    const isDriveUrl =
      url.hostname.includes("drive.google.com") ||
      url.hostname.includes("googleusercontent.com");

    if (!isDriveUrl) return "";

    return (
      url.searchParams.get("id") ||
      url.pathname.match(/\/d\/([^/]+)/)?.[1] ||
      url.pathname.match(/\/file\/d\/([^/]+)/)?.[1] ||
      ""
    );
  } catch {
    return "";
  }
}

export function buildDrivePhotoUrl(fileId) {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

export function buildDrivePhotoFallbackUrl(fileId) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w200-h200`;
}

function normalizePhotoUrl(value) {
  const normalized = normalizeCell(value);
  if (!normalized) return "";

  try {
    const fileId = extractDriveFileId(normalized);

    if (fileId) {
      return buildDrivePhotoUrl(fileId);
    }

    return new URL(normalized).toString();
  } catch {
    return "";
  }
}

function isPermissionGranted(value) {
  const normalized = normalizeCell(value).toLowerCase();

  if (!normalized) return false;

  return [
    "yes",
    "true",
    "1",
    "y",
    "allowed",
    "approved",
    "i agree",
    "agreed",
  ].includes(normalized);
}

function isValidRow(row) {
  if (!row || !Array.isArray(row)) return false;

  const clientName = normalizeCell(row[1]);
  const reviewMessage = normalizeCell(row[4]);
  const rating = parseInt(row[5], 10);

  return (
    clientName &&
    reviewMessage &&
    reviewMessage.length > 10 &&
    isPermissionGranted(row[7]) &&
    !Number.isNaN(rating) &&
    rating >= 1 &&
    rating <= 5
  );
}

function rowToObject(row) {
  const obj = {};

  Object.entries(COLUMN_MAP).forEach(([index, key]) => {
    obj[key] = normalizeCell(row[parseInt(index, 10)]);
  });

  obj.rating = Math.min(5, Math.max(1, parseInt(obj.rating, 10) || 5));
  obj.photoUrl = normalizePhotoUrl(obj.photoUrl);
  obj.id = `${obj.clientName}-${obj.timestamp}`.replace(/\s+/g, "-").toLowerCase();

  return obj;
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch {
    // Ignore sessionStorage quota errors.
  }
}

async function fetchTestimonialsFromSheets() {
  if (!SPREADSHEET_ID || !API_KEY) {
    throw new Error(
      "Missing VITE_SHEETS_ID or VITE_SHEETS_KEY in the project root .env file."
    );
  }

  const sheetRange = encodeURIComponent(SHEET_NAME);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetRange}?key=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      `Google Sheets API error ${res.status}: ${err?.error?.message || res.statusText}`
    );
  }

  const json = await res.json();
  const rows = json.values ?? [];

  return rows
    .slice(1)
    .filter(isValidRow)
    .map(rowToObject)
    .reverse();
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  const load = useCallback(async (skipCache = false) => {
    setError(null);

    if (!skipCache) {
      const cached = readCache();
      if (cached) {
        setTestimonials(cached);
        setLoading(false);
        return;
      }
    }

    setLoading(true);

    try {
      const data = await fetchTestimonialsFromSheets();
      writeCache(data);
      setTestimonials(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    intervalRef.current = setInterval(() => load(true), AUTO_REFRESH_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [load]);

  const refresh = useCallback(() => load(true), [load]);

  return { testimonials, loading, error, refresh };
}
