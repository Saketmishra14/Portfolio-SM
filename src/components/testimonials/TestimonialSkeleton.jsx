export function TestimonialSkeleton() {
  return (
    <div className="animate-pulse rounded-md border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200/60 dark:border-gray-700 dark:bg-black dark:shadow-sm dark:shadow-black">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded bg-gray-200 dark:bg-zinc-800"
            />
          ))}
        </div>
        <div className="h-5 w-24 rounded-full bg-gray-200 dark:bg-zinc-800" />
      </div>

      <div className="mt-4 flex-1 space-y-2">
        <div className="h-3 w-full rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="h-3 w-3/6 rounded bg-gray-200 dark:bg-zinc-800" />
      </div>

      <div className="my-4 h-px bg-gray-200 dark:bg-gray-700" />

      <div className="flex items-center gap-3">
        <div className="h-11 w-11 flex-shrink-0 rounded-full bg-gray-200 dark:bg-zinc-800" />
        <div className="flex-1 space-y-1.5">
          <div className="h-3 w-28 rounded bg-gray-200 dark:bg-zinc-800" />
          <div className="h-3 w-20 rounded bg-gray-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
