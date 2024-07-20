import { useEffect, useState } from "react";

export default function useRecognition() {
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const sr = new SpeechRecognition();
  sr.continuous = false;
  sr.lang = "es-ES";
  sr.interimResults = false;
  sr.maxAlternatives = 1;

  const [transcript, setTranscript] = useState("");
  const [isTranscripting, setIsTranscribing] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isTranscripting) {
      setTranscript("");
    }
  }, [isTranscripting])

  const startTranscription = () => {
    setIsTranscribing(true);
    sr.start();
  };

  const stopTranscription = () => {
    setIsTranscribing(false);
    sr.stop();
  };

  const abortTranscription = () => {
    setIsTranscribing(false);
    sr.abort();
  };

  sr.onresult = (ev: SpeechRecognitionEvent) => {
    const transcript = ev.results[ev.results.length - 1][0].transcript;
    setTranscript(transcript);
    setIsTranscribing(false);
  };

  sr.onerror = (ev: any) => {
    setIsError(true);
    setIsTranscribing(false);
    console.error(ev.error);
  };

  return {
    transcript,
    isTranscripting,
    isError,
    startTranscription,
    stopTranscription,
    abortTranscription,
  };
}
