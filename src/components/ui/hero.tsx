interface HeroProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Hero({ title, description, children }: HeroProps) {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-pretty text-center">{description}</p>

      <section className="flex flex-col items-center mt-4 gap-2 w-3/6">
        {children}
      </section>
    </section>
  );
}

export default Hero;
