import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="h-100 flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
}
