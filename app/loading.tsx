import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Loader2 className="animate-spin text-primary" />
        Loading...
      </div>
    </div>
  );
}
