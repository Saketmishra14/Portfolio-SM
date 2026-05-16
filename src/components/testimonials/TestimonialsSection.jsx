import { useTestimonials } from "../../hooks/useTestimonials";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialSkeleton } from "./TestimonialSkeleton";

function EmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-md border border-dashed border-gray-300 bg-slate-50 px-6 py-20 text-center dark:border-gray-700 dark:bg-black">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shadow-gray-200 dark:bg-zinc-900 dark:shadow-none">
        <svg
          className="h-8 w-8 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <p className="font-poppins text-sm text-gray-600 dark:text-gray-300">
        No testimonials yet. Check back soon.
      </p>
    </div>
  );
}

function ErrorState({ error, onRetry }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-4 rounded-md border border-red-200 bg-red-50/60 px-6 py-20 text-center dark:border-red-900/50 dark:bg-red-950/20">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md shadow-red-100 dark:bg-zinc-900 dark:shadow-none">
        <svg
          className="h-8 w-8 text-red-500 dark:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div>
        <p className="mb-1 font-poppins text-sm text-gray-800 dark:text-white">
          Could not load testimonials.
        </p>
        <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
          {error}
        </p>
      </div>
      <button
        onClick={onRetry}
        className="rounded-full bg-blue-600 px-4 py-2 font-poppins text-xs font-semibold text-white transition-transform hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}

function SectionHeader({ count }) {
  return (
    <div className="mb-12 text-center">
      <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 font-poppins text-xs font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
        Client Stories
      </span>
      <h2 className="font-poppins text-xl font-semibold text-black dark:text-white lg:text-3xl">
        What clients are saying
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-slate-300">
        Real feedback from real projects.
        {count > 0 && (
          <span className="ml-1 text-gray-500 dark:text-slate-400">
            ({count} reviews)
          </span>
        )}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const { testimonials, loading, error, refresh } = useTestimonials();
  const isDev = import.meta.env.DEV;
  const skeletonCount = 6;

  return (
    <section
      id="testimonials"
      className="relative mt-28 overflow-hidden px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-100/70 to-transparent dark:from-blue-950/20" />
      <div className="pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-700/10" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader count={testimonials.length} />

        <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            [...Array(skeletonCount)].map((_, index) => (
              <TestimonialSkeleton key={index} />
            ))
          ) : error ? (
            <ErrorState error={error} onRetry={refresh} />
          ) : testimonials.length === 0 ? (
            <EmptyState />
          ) : (
            testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          )}
        </div>

        {isDev && !loading && (
          <div className="mt-8 text-center">
            <button
              onClick={refresh}
              className="font-poppins text-xs text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Refresh cache
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
