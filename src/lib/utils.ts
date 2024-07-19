import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortUser(mail: string | null | undefined) {
  if (!mail) {
    return ""
  } else {
    return mail?.split("@")[0]
  }
}