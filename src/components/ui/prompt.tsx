"use client";

import { CornerDownLeft, Mic, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { LucideLoader } from "../icons/loader";
import { toast } from "sonner";

interface PromptProps {
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
  isError?: Error;
}

export default function Prompt({
  handleSubmit,
  handleChange,
  isLoading,
  isError,
}: PromptProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isError) {
      toast.error("Ocurrio un error, recargue la página e intente de nuevo.")
    }
  }, [isError])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
    formRef?.current?.reset()
  }

  return (
    <section className="w-full h-1/6">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        autoComplete="off"
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full h-auto"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Escribe tu pregunta aqui..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          onChange={handleChange}
        />
        <div className="flex items-center flex-wrap p-3 pt-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" type="button">
                <Mic className="size-4" />
                <span className="sr-only">Use Microphone</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" type="reset">
                <Trash className="size-4" />
                <span className="sr-only">Clear prompt</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
          <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
            {isLoading ? <LucideLoader className="animate-spin" size={25} /> : <CornerDownLeft />}
          </Button>
        </div>
      </form>
    </section>
  );
}
