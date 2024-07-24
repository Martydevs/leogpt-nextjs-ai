import { CopyIcon, PauseIcon, Volume2Icon } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";
import ChatTooltip from "./chat-tooltip";
import useSynthesis from "@/hooks/useSynthesis";
import { useEffect, useState } from "react";
import { shortUser } from "@/lib/utils";

interface BubbleProps {
  role: string;
  content: string;
  assistantName: string;
  user: string;
}

function Bubble({ role, content, assistantName, user }: BubbleProps) {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  const { isSpeaking, startToSpeak, stopToSpeak } = useSynthesis(content, voice)

  useEffect(() => {
    const browsers = navigator.userAgent
    const voices = window.speechSynthesis.getVoices()

    if (browsers.includes("Edg")) {
      const raul = voices[265]
      setVoice(raul)
    }
  }, [])

  const handleCopy = () => {
    toast.success("Copiado al portapapeles");
    navigator.clipboard.writeText(content)
  }

  const handleSpeak = () => {
    if (isSpeaking) {
      stopToSpeak()
    } else {
      startToSpeak()
    }
  }

  return (
    <section className={`my-3 rounded-lg flex flex-col text-pretty max-w-[22rem] w-full shadow-2xl ${role === "assistant" ? "bg-red-500" : "border border-red-500"} ${role === "assistant" ? "self-start ml-2" : "self-end mr-2"}`}>
      <span className="w-full rounded-t-xl bg-red-900 p-2">
        <p className={`font-bold text-white ${ role === "assistant" ? "text-left" : "text-right" }`}>
          {role === "assistant" ? assistantName : `${shortUser(user)} (Tú)`}
        </p>
      </span>
      <span className='w-full rounded-b-xl p-2'>
        <p className={`text-pretty ${role === "assistant" ? "text-white text-left" : "text-right" }`}>{content}</p>
      </span>

      {role === "assistant" && (
        <section className="w-full flex justify-end items-center py-2">
          <ChatTooltip tooltipContent="Copiar al portapapeles">
            <Button className="mr-2 rounded-full hover:bg-red-600" variant={"ghost"} onClick={handleCopy}>
              <CopyIcon className="size-4 text-white" />
            </Button>
          </ChatTooltip>

          <ChatTooltip tooltipContent={isSpeaking ? "Detener" : "Reproducir"}>
            <Button className="mr-2 rounded-full hover:bg-red-600" variant={"ghost"} onClick={handleSpeak}>
              {isSpeaking ? <PauseIcon className="size-5 text-white" /> : <Volume2Icon className="size-5 text-white" />}
            </Button>
          </ChatTooltip>
        </section>
      )}
    </section>
  );
}

export default Bubble;