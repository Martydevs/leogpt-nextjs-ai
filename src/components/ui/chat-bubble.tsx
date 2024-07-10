import { CopyIcon, Volume2Icon } from "lucide-react";
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
    <section className={`my-3 rounded-lg flex flex-col text-pretty max-w-[22rem] w-full shadow-2xl ${role === "assistant" ? "bg-red-500" : "border border-red-500"} ${role === "assistant" ? "self-start ml-2" : "self-end mr-2"}`}>
      <span className="w-full rounded-t-xl bg-red-900 p-2">
        <p className={`font-bold text-white ${ role === "user" ? "text-right" : "text-left" }`}>
          {role === "assistant" ? assistantName : "You"}
        </p>
      </span>
      <span className='w-full rounded-b-xl p-2'>
        <p className={`text-pretty ${role === "assistant" ? "text-white text-left" : "text-right" }`}>{content}</p>
      </span>

      {role === "assistant" && (
        <section className="w-full flex justify-end items-center py-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="mr-2 rounded-full hover:bg-red-600" variant={"ghost"} onClick={handleCopy}>
                <CopyIcon className="size-4 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Copiar al portapapeles</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="mr-2 rounded-full hover:bg-red-600" variant={"ghost"}>
                <Volume2Icon className="size-5 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Reproducir respuesta</TooltipContent>
          </Tooltip>
        </section>
      )}
    </section>
  );
}

export function LoadingBubble() {
  return (
    <section className="w-full max-w-[22rem] min-h-32 my-2 self-start flex flex-col gap-2 border-2 rounded-xl p-2">
      <span className="w-full h-auto flex items-center justify-start gap-2">
        <Skeleton className="w-40 h-10 rounded-xl" />
        <Skeleton className="w-14 h-10 rounded-xl" />
      </span>
      <Skeleton className="w-full h-full rounded-xl" />
    </section>
  );
}
