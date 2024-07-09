import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="min-w-full max-w-7xl mx-auto flex justify-between items-center p-6 border border-b-2">
      <span className="inline-flex bg-gradient-to-r to-zinc-600 from-[#ff002c] bg-[100%_auto] bg-clip-text text-xl text-transparent">
        <p className="font-bold text-3xl">LeoGPT</p>
      </span>
      <section>
        <ModeToggle />
      </section>
    </nav>
  );
}
