"use client";

import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChangeEvent } from "react";

interface PromptProps {
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  loading: boolean;
}

export default function Prompt({
  handleSubmit,
  handleChange,
  loading,
}: PromptProps) {
  return (
    <section className="w-full h-1/6">
      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full h-auto"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          onChange={handleChange}
        />
        <div className="flex items-center p-3 pt-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Paperclip className="size-4" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Attach File</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Mic className="size-4" />
                <span className="sr-only">Use Microphone</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            {loading ? "Sending..." : "Send"}
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </section>
  );
}
