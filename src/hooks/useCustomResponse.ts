import { Message } from "ai";
import { useEffect } from "react";

export function useCustomResponse(messages: Message[], messagesDispatcher: Function, isLoading: boolean) {
  const message: Message = { id: "loading", createdAt: new Date(), content: "", role: "assistant" }

  useEffect(() => {
    if (isLoading) {
      messagesDispatcher([...messages, message]);
    } else {
      const messagesWithoutLoading = messages.filter(m => m.id !== "loading");
      messagesDispatcher(messagesWithoutLoading);
    }
  }, [isLoading]);
  return messages
}