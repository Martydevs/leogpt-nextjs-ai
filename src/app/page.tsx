import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import MainLayout from "@/components/layouts/main";
import AnimatedRotatingButton from "@/components/ui/bg-rotating-button";

const DynamicFlipWords = dynamic(() => import("../components/ui/flip-words").then(m => m.FlipWords), {
  ssr: false,
});

async function HomePage() {
  const palabras = ["rápido", "eficiente", "ínteligente", "efectivo"];

  return (
    <MainLayout>
      <section className="w-full h-screen flex flex-col items-center justify-center text-pretty gap-4">
        <span className="w-full flex flex-col items-center justify-center gap-4 flex-wrap">
          <h1 className="text-4xl font-extrabold text-center md:text-7xl lg:text-7xl">
            Estudia más <DynamicFlipWords words={palabras} />
          </h1>
          <p className="text-center md:text-xl lg:text-xl">
            con <strong className="font-bold text-red-700">LeoGPT</strong>, tu
            asistente de confianza.
          </p>
        </span>

        <Link href="/auth">
          <AnimatedRotatingButton>
            Comenzar
            <ArrowRight size={24} className="ml-2" />
          </AnimatedRotatingButton>
        </Link>
      </section>
    </MainLayout>
  );
}

export default HomePage;
