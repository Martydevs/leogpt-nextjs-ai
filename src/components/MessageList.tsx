import { Message } from "ai"
import Bubble from "./ui/chat-bubble"

interface MessageListProps {
  messages: Message[]
}

function MessageList({ messages = [] }: MessageListProps) {
  return (
    <>
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
    </>
  )
}

export default MessageList