import { CopyIcon } from "lucide-react";
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BubbleProps {
  role: string;
  content: string;
  assistantName: string;
}

export function Bubble({ role, content, assistantName }: BubbleProps) {
  const handleCopy = () => {
    toast.success("Copiado al portapapeles");
    navigator.clipboard.writeText(content)
  }

  return (
    <section className={`my-2 rounded-lg flex flex-col text-pretty max-w-72 w-full ${role === "assistant" ? "bg-red-500" : "border border-red-500"} ${role === "assistant" ? "self-start" : "self-end"}`}>
      <span className="w-full rounded-t-xl bg-red-900 p-2">
        <p className={`font-bold text-white ${ role === "user" ? "text-right" : "text-left" }`}>
          {role === "assistant" ? assistantName : "You"}
        </p>
      </span>
      <span className={`w-full rounded-b-xl p-2 ${role === "assistant" ? "text-white text-left" : "text-right" }`}>
        {content}
      </span>
      {role === "assistant" && (
        <section className="w-full flex justify-end items-center py-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="mr-2 rounded-full hover:bg-red-600" variant={"ghost"} onClick={handleCopy}>
                <CopyIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Copiar al portapapeles</TooltipContent>
          </Tooltip>
        </section>
      )}
    </section>
  );
}

export function LoadingBubble() {
  return (
    <section className="w-full max-w-72 min-h-32 my-2 self-start flex flex-col gap-2 border rounded-xl p-2">
      <Skeleton className="w-40 h-10 rounded-xl" />
      <Skeleton className="w-full h-full rounded-xl" />
    </section>
  );
}
