"use client";

import { CornerDownLeft, Mic, SquareIcon, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChangeEvent, useRef } from "react";
import { LucideLoader } from "../icons/loader";

interface PromptProps {
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
  stop: () => void;
}

export default function Prompt({
  handleSubmit,
  handleChange,
  isLoading,
  stop,
}: PromptProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section className="w-full h-1/6">
      <form
        ref={formRef}
        autoComplete="off"
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full h-auto"
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSubmit();
          formRef?.current?.reset()
        }}
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Escribe tu pregunta aqui..."
          className="min-h-16 resize-none border-0 p-4 shadow-none focus-visible:ring-0"
          onChange={handleChange}
        />
        <div className="flex items-center flex-wrap gap-3 p-2">

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="border border-accent rounded-full" variant="ghost" size="icon" type="button">
                <Mic className="size-4" />
                <span className="sr-only">Usar micrófono</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Usar micrófono</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="border border-accent rounded-full" variant="ghost" size="icon" type="reset">
                <Trash className="size-4" />
                <span className="sr-only">Limpiar entrada</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Limpiar entrada</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="border border-accent rounded-full" variant={`${isLoading ? "destructive" : "ghost"}`} size="icon" onClick={stop} disabled={!isLoading}>
                <SquareIcon className="size-4" />
                <span className="sr-only">Parar procesamiento</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Parar procesamiento</TooltipContent>
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
