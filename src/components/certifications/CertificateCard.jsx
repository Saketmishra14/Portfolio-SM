/* eslint-disable react/prop-types */
import { memo } from "react";

const CertificateCard = ({ certificate, index, onOpen }) => {
  const handleOpen = () => {
    onOpen(certificate);
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="certificate-card-animate group w-full cursor-pointer overflow-hidden rounded-md border border-gray-200 bg-slate-50 text-left shadow-sm shadow-gray-200 transition-all duration-300 hover:scale-[1.03] hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-black dark:shadow-black dark:hover:border-blue-500 dark:hover:shadow-blue-950/30 dark:focus-visible:ring-offset-zinc-900"
      style={{ animationDelay: `${index * 120}ms` }}
      aria-label={`View ${certificate.title} certificate`}
    >
      <div className="aspect-[16/11] overflow-hidden border-b border-gray-200 bg-white dark:border-gray-700">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate issued by ${certificate.organization}`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex min-h-32 flex-col justify-between p-4 dark:text-white sm:p-5">
        <div>
          <h2 className="text-base font-semibold leading-snug text-neutral-900 dark:text-gray-100 sm:text-lg">
            {certificate.title}
          </h2>
          <p className="mt-2 text-sm font-light text-gray-600 dark:text-gray-400">
            {certificate.organization}
          </p>
        </div>

        {certificate.date && (
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Issued {certificate.date}
          </p>
        )}
      </div>
    </button>
  );
};

export default memo(CertificateCard);
