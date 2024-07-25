"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "../ui/footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full mx-auto md:container lg:container flex flex-col items-center justify-between">
        {children}
      </section>
      {path !== "/chat" && <Footer />}
    </>
  );
}

export default MainLayout;
