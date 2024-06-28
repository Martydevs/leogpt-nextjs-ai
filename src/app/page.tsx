"use client";

import { useChat } from "ai/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SentIcon from "@/components/icons/send";
import Prompt from "@/components/ui/prompt";

export default function Home() {
  const { messages, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="h-screen w-3/4 m-auto flex flex-col items-center justify-between">
        <section className="max-h-80 h-full w-full overflow-y-auto flex flex-col items-center py-2">
          {messages.map(({ id, role, content }) => (
            <div key={id} className={`whitespace-pre-wrap px-4 py-2 rounded-lg ${role === "assistant" ? "self-start" : "self-end"}`}>
              {role === "user" && <strong>Yo: </strong>}
              {role === "assistant" && <strong>Leo: </strong>}
              {content}
            </div>
          ))}
        </section>

        
          <Prompt 
            handleSubmit={handleSubmit}
            handleChange={handleInputChange}
            loading={isLoading}
          />
      </section>
    </main>
  );
}
