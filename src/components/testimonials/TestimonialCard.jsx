import { useEffect, useState } from "react";
import {
  buildDrivePhotoFallbackUrl,
  extractDriveFileId,
} from "../../hooks/useTestimonials";

function StarRating({ rating }) {
  return (
    <div className="mb-3 flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 transition-colors ${
            star <= rating
              ? "text-amber-400"
              : "text-gray-300 dark:text-slate-700"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getDriveThumbnailUrl(value) {
  const fileId = extractDriveFileId(value);
  return fileId ? buildDrivePhotoFallbackUrl(fileId) : "";
}

function Avatar({ src, name }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgError, setImgError] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  useEffect(() => {
    setImgSrc(src);
    setImgError(false);
    setErrorCount(0);
  }, [src]);

  const handleError = () => {
    const fallbackSrc = getDriveThumbnailUrl(src);

    if (errorCount === 0 && fallbackSrc && fallbackSrc !== imgSrc) {
      setImgSrc(fallbackSrc);
      setErrorCount(1);
      return;
    }

    setImgError(true);
  };

  if (src && !imgError) {
    return (
      <img
        src={imgSrc}
        alt={name}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={handleError}
        className="h-11 w-11 rounded-full object-cover"
      />
    );
  }

  const colors = [
    "bg-violet-500",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-cyan-500",
    "bg-pink-500",
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white text-sm font-bold text-white shadow-sm dark:border-gray-700 dark:shadow-none ${colors[colorIndex]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export function TestimonialCard({ testimonial }) {
  const {
    clientName,
    companyName,
    projectName,
    reviewMessage,
    rating,
    photoUrl,
  } = testimonial;

  return (
    <article className="group relative flex cursor-default flex-col gap-4 rounded-md border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200/70 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-gray-300 dark:border-gray-700 dark:bg-black dark:shadow-sm dark:shadow-black">
      <div className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-br from-blue-500/0 to-cyan-400/0 transition-all duration-300 group-hover:from-blue-500/5 group-hover:to-cyan-400/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-cyan-400/10" />

      <div className="flex items-start justify-between gap-3">
        <StarRating rating={rating} />
        {projectName && (
          <span className="max-w-[140px] truncate rounded-full border border-gray-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-gray-700 dark:bg-zinc-900 dark:text-slate-300">
            {projectName}
          </span>
        )}
      </div>

      <blockquote className="relative flex-1">
        
        <p className="-mt-1 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
          {reviewMessage}
        </p>
      </blockquote>

      <div className="h-px bg-gray-200 dark:bg-gray-700" />

      <footer className="flex items-center gap-3">
        <Avatar src={photoUrl} name={clientName} />
        <div className="min-w-0">
          <p className="truncate font-poppins text-sm font-semibold text-black dark:text-white">
            {clientName}
          </p>
          {companyName && (
            <p className="truncate text-xs text-gray-500 dark:text-slate-400">
              {companyName}
            </p>
          )}
        </div>
      </footer>
    </article>
  );
}
