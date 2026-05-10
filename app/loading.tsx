export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-surface px-6 py-16">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
        aria-label="Loading page content"
        role="status"
      />
    </div>
  )
}
