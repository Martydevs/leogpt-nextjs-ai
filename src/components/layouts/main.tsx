"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "../ui/footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <>
      <Navbar />
      <section className="h-screen w-full px-2 mx-auto md:px-0 lg:px-0 md:container lg:container flex flex-col items-center justify-center">
        {children}
      </section>
      {path !== "/chat" && <Footer />}
    </>
  );
}

export default MainLayout;
