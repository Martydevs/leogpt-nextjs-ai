import { Message } from "ai";
import { useEffect } from "react";

export function useCustomResponse({ id, createdAt, content, role }: Message, messages: Message[], messagesDispatcher: Function, loadingState: boolean) {
  useEffect(() => {
    const loadingMessage: Message[] = [{ id, createdAt, content, role }]
    const messagesWithoutLoading = messages.filter((m) => m.id !== "loading")

    if (loadingState) {
      messagesDispatcher([...messages, ...loadingMessage]);
    } else {
      messagesDispatcher(messagesWithoutLoading);
    }
  }, [loadingState])

  return messages
}