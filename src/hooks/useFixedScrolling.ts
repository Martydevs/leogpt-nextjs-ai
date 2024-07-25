import { Message } from "ai/react";
import { useEffect, useRef } from "react"

export default function useFixedScrolling(list: Message[]) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollTop = elementRef.current.scrollHeight;
    }
  }, [list]);
  
  return elementRef
}