"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Message, useChat } from "ai/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { toast } from "sonner";

import { questions } from "@/mock/questions";

import useCustomLoadingEffect from "@/hooks/useCustomResponse";
import useFixedScrolling from "@/hooks/useFixedScrolling";

import { shortUser } from "@/lib/utils";

import MainLayout from "@/components/layouts/main";
import Bubble from "@/components/ui/chat-bubble";
import LoadingBubble from "@/components/ui/chat-loading-bubble";
import Hero from "@/components/ui/hero";
import QuestionButton from "@/components/ui/question-button";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicPromptEntry = dynamic(() => import("../../components/ui/prompt"), {
  ssr: false,
  loading: () => (
    <section className="w-full h-1/6 border rounded-xl p-4">
      <Skeleton className="w-full h-full rounded-xl" />
    </section>
  ),
});

export default function Chat() {
  const {
    messages: aiMessages,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    stop,
    setMessages,
    input,
    setInput,
  } = useChat();
  const messages = useCustomLoadingEffect(aiMessages, setMessages, isLoading);
  const messagesRef = useFixedScrolling<Message[]>(messages);

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  useEffect(() => {
    if (error) {
      toast.error(
        "Ocurrio un error al comunicar con Leo, recargue la aplicación e intente de nuevo."
      );
    }
  }, [error]);

  return (
    <MainLayout>
      {messages.length > 0 ? (
        <section
          ref={messagesRef}
          className="h-full w-full overflow-y-auto flex flex-col items-center"
        >
          {messages.map((m) =>
            isLoading && m.id === "loading" ? (
              <LoadingBubble key={m.id} />
            ) : (
              <Bubble
                key={m.id}
                user={user}
                role={m.role}
                content={m.content}
                assistantName={"Leo"}
              />
            )
          )}
        </section>
      ) : (
        <Hero
          title={`Bienvenido!, ${shortUser(user?.email)}`}
          description="Escriba una pregunta o bien, seleccione una de las preguntas de abajo."
        >
          <span className="flex flex-col items-center gap-2 w-full md:flex-row lg:flex-row">
            {[...questions].splice(0, 2).map((n, i) => (
              <QuestionButton
                key={i}
                handleClick={setInput}
                title={n.title}
                description={n.description}
              />
            ))}
          </span>

          <span className="flex flex-col items-center gap-2 w-full md:flex-row lg:flex-row">
            {[...questions].splice(2, 4).map((n, i) => (
              <QuestionButton
                key={i}
                handleClick={setInput}
                title={n.title}
                description="carreras tiene la universidad?"
              />
            ))}
          </span>
        </Hero>
      )}

      <DynamicPromptEntry
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        isLoading={isLoading}
        stop={stop}
        input={input}
        handleInput={setInput}
      />
    </MainLayout>
  );
}
