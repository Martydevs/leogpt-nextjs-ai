import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortUser(mail: string) {
  if (mail?.includes("@")) {
    return mail.split("@")[0]
  } else {
    return mail
  }
}