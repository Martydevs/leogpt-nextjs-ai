import { MessageStatus } from "@/models/assistants";
import { Message } from "ai/react";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function useCustomLoadingEffect(messages: Message[], messagesDispatcher: Dispatch<SetStateAction<Message[]>>, isLoading: MessageStatus) {
  const message: Message = { id: "loading", createdAt: new Date(), content: "", role: "assistant" }

  useEffect(() => {
    if (isLoading === "in_progress") {
      messagesDispatcher([...messages, message]);
    } else {
      const messagesWithoutLoading = messages.filter(m => m.id !== "loading");
      messagesDispatcher(messagesWithoutLoading);
    }
  }, [isLoading]);
  return messages
}