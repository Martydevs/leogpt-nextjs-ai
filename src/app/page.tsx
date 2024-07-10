"use client";

import { useChat } from "ai/react";
import { useEffect } from "react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

import MainLayout from "@/components/layouts/main";
import { Bubble, LoadingBubble } from "@/components/ui/chat-bubble";
import { useCustomLoadingEffect } from "@/hooks/useCustomResponse";

const PromptEntry = dynamic(() => import("@/components/ui/prompt"))

export default function Home() {
  const { messages: aiMessages, handleInputChange, handleSubmit, isLoading, error, stop, setMessages } = useChat();
  const messages = useCustomLoadingEffect(aiMessages, setMessages, isLoading);

  useEffect(() => {
    if (error) {
      toast.error("Ocurrio un error al comunicar con Leo, recargue la aplicación e intente de nuevo.");
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

      <PromptEntry
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        isLoading={isLoading}
        stop={stop}
      />
    </MainLayout>
  );
}
