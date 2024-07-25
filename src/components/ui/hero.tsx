interface HeroProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Hero({ title, description, children }: HeroProps) {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-2">
      <h2 className="text-4xl font-extrabold text-center">Bienvenido!, <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-yellow-300 text-transparent bg-clip-text animate-gradient text-4xl font-extrabold">{title}</span></h2>
      <p className="text-pretty text-center">{description}</p>

      <section className="flex flex-col items-center justify-center mt-4 w-full gap-2 md:w-3/6 lg:w-3/6">
        {children}
      </section>
    </section>
  );
}

export default Hero;
