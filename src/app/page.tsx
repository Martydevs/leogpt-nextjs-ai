"use client";

import { Message, useChat } from "ai/react";
import { useEffect } from "react";
import { toast } from "sonner";

import Prompt from "@/components/ui/prompt";
import MainLayout from "@/components/layouts/main";
import { Bubble, LoadingBubble } from "@/components/ui/chat-bubble";
import { useCustomResponse } from "@/hooks/useCustomResponse";

export default function Home() {
  const { messages: aiMessages, handleInputChange, handleSubmit, isLoading, error, stop, setMessages } = useChat();
  const messages = useCustomResponse(aiMessages, setMessages, isLoading);

  useEffect(() => {
    if (error) {
      toast.error("Ocurrio un error al comunicar con Leo: " + error.message);
    }
  }, [error]);

  return (
    <MainLayout>
      {messages.length > 0 ? (
        <section className="h-full w-full overflow-y-auto flex flex-col items-center">
          {messages.map(m => (
            isLoading && m.id === "loading" ? (
              <LoadingBubble key={m.id} />
            ) : (
              <Bubble
                key={m.id}
                role={m.role}
                content={m.content}
                assistantName={"Leo"}
              />
            )
          ))}
        </section>
      ) : (
        <section className="min-h-80 max-h-80 w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Bienvenido!</h2>
          <p>Por favor, escribe tu primer mensaje.</p>
        </section>
      )}

      <Prompt
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        isLoading={isLoading}
        isError={error}
        stop={stop}
      />
    </MainLayout>
  );
}
