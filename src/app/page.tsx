"use client";

import { useChat } from "ai/react";
import Prompt from "@/components/ui/prompt";
import MainLayout from "@/components/layouts/main";
import { useEffect } from "react";
import { toast } from "sonner";
import MessageList from "@/components/MessageList";

export default function Home() {
  const { messages, handleInputChange, handleSubmit, isLoading, error } = useChat();

  useEffect(() => {
    if (error) {
      toast.error("Ocurrio un error al comunicar con Leo: " + error.message)
    }
  }, [error])

  return (
    <MainLayout>
      <MessageList 
        messages={messages}
      />

      <Prompt
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        loading={isLoading}
      />
    </MainLayout>
  );
}
