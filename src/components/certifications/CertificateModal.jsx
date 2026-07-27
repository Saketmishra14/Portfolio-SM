/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const CertificateModal = ({ certificate, onClose }) => {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(focusableSelector)
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!certificate) {
    return null;
  }

  return (
    <div
      className="certificate-modal-fade fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md sm:px-8"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        className="certificate-modal-zoom relative flex max-h-[92vh] w-full max-w-6xl items-center justify-center outline-none"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0 z-10 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:-right-3 sm:-top-3"
          aria-label="Close certificate viewer"
        >
          <CloseIcon fontSize="small" />
        </button>

        <div className="max-h-[92vh] w-full pt-12 sm:pt-8">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate issued by ${certificate.organization}`}
            className="mx-auto max-h-[82vh] w-auto max-w-full rounded-md object-contain shadow-2xl shadow-black/50"
            decoding="async"
          />

          <div className="sr-only">
            <h2 id="certificate-modal-title">{certificate.title}</h2>
            <p>
              Issued by {certificate.organization}
              {certificate.date ? ` in ${certificate.date}` : ""}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
