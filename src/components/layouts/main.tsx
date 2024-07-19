'use client'

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "../ui/footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <section className="h-screen mx-auto container flex flex-col items-center justify-center">
        {children}
      </section>
      {path !== "/chat" && <Footer />}
    </main>
  );
}

export default MainLayout;
