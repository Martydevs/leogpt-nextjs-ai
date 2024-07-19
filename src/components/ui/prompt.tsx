"use client";

import { CornerDownLeft, Mic, SquareIcon, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { LucideLoader } from "../icons/loader";
import ChatTooltip from "./chat-tooltip";
import useRecognition from "@/hooks/useRecognition";

interface PromptProps {
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  input: string;
  isLoading: boolean;
  stop: () => void;
  handleInput: Dispatch<SetStateAction<string>>
}

export default function Prompt({
  handleSubmit,
  handleChange,
  isLoading,
  stop,
  input,
  handleInput
}: PromptProps) {
  const { transcript, isTranscripting, startTranscription, abortTranscription } = useRecognition()

  useEffect(() => {
    if (!isTranscripting && transcript) {
      handleInput(prev => prev + transcript)
    }
  }, [isTranscripting, transcript])

  const handleStart = () => {
    if (isTranscripting) {
      abortTranscription();
    } else {
      startTranscription();
    }
  }

  return (
    <section className="w-full h-1/6">
      <form
        autoComplete="off"
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full h-auto"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Escribe tu pregunta aqui..."
          className="min-h-16 resize-none border-0 p-4 shadow-none focus-visible:ring-0"
          onChange={handleChange}
          value={input}
        />
        <div className="flex items-center flex-wrap gap-3 p-2">
          <ChatTooltip tooltipContent="Usar micrófono">
            <Button className="border border-accent rounded-full" variant="ghost" size="icon" type="button" onClick={handleStart}>
              {isTranscripting ? <SquareIcon className="size-4" /> : <Mic className="size-4" />}
              <span className="sr-only">Usar micrófono</span>
            </Button>
          </ChatTooltip>

          <ChatTooltip tooltipContent="Limpiar entrada">
            <Button className="border border-accent rounded-full" variant="ghost" size="icon" type="button" onClick={() => handleInput("")} disabled={input.length === 0}>
              <Trash className="size-4" />
              <span className="sr-only">Limpiar entrada</span>
            </Button>
          </ChatTooltip>

          <ChatTooltip tooltipContent="Parar procesamiento">
            <Button className="border border-accent rounded-full" variant={`${isLoading ? "destructive" : "ghost"}`} size="icon" onClick={stop} disabled={!isLoading}>
              <SquareIcon className="size-4" />
              <span className="sr-only">Parar procesamiento</span>
            </Button>
          </ChatTooltip>

          <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={isLoading}>
            {isLoading ? "Procesando..." : "Enviar"}
            {isLoading ? <LucideLoader className="animate-spin" size={25} /> : <CornerDownLeft />}
          </Button>
        </div>
      </form>
    </section>
  );
}
