export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-3xl font-semibold text-destructive flex items-center gap-2">
        404
        <span className="text-foreground">| Page Not Found</span>
      </h1>
      <p className="mt-2 text-muted-foreground">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
