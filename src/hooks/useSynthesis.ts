import { useState } from "react";

type Voice = SpeechSynthesisVoice | null

export default function useSynthesis(text: string, voice: Voice) {
  const ss = new SpeechSynthesisUtterance(text);
  ss.volume = 1;
  ss.rate = 1;
  ss.pitch = 0.4;
  ss.lang = "es-MX";
  ss.voice = voice ?? window.speechSynthesis.getVoices()[0];

  const [isSpeaking, setIsSpeaking] = useState(false);

  const startToSpeak = () => {
    if (text !== "") {
      setIsSpeaking(true);
      window.speechSynthesis.speak(ss);
    } else {
      setIsSpeaking(false);
    }
  };

  const stopToSpeak = () => {
    setIsSpeaking(false);
    window.speechSynthesis.cancel();
  };

  ss.onend = () => {
    setIsSpeaking(false);
  };

  return {
    isSpeaking,
    startToSpeak,
    stopToSpeak
  }
}