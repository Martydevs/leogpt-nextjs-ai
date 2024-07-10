import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "LeoGPT",
  description: "Asistente inteligente especializado en la UMM",
  keywords: ["chatbot", "leogpt", "umm", "asistente", "leo"],
  applicationName: "leoai",
  authors: [ { name: "Andrew Marti (Martydevs)", url: "https://github.com/Marydevs" } ],
  creator: "Andrew Marti (Martydevs)",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
