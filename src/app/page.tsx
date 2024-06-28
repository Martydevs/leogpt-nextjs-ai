"use client";

import { useChat } from "ai/react";
import Prompt from "@/components/ui/prompt";
import Bubble from "@/components/ui/chat-bubble";
import MainLayout from "@/components/layouts/main";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const { messages, handleInputChange, handleSubmit, isLoading, error } = useChat();

  useEffect(() => {
    if (error) {
      toast.error("Ocurrio un error al comunicar con Leo: " + error.message)
    }
  }, [error])

  return (
    <MainLayout>
      {messages.length > 0 ? (
        <section className="h-full w-full overflow-y-auto flex flex-col items-center">
          {messages.map(({ id, role, content }) => (
            <Bubble
              key={id}
              role={role}
              content={content}
              assistantName={"Leo"}
            />
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
        loading={isLoading}
      />
    </MainLayout>
  );
}
