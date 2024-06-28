import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="min-w-full max-w-7xl mx-auto flex justify-between items-center p-6 border border-b-2">
      <section>
        <h1 className="text-3xl font-bold">LeoGPT</h1>
      </section>
      <section>
        <ModeToggle />
      </section>
    </nav>
  )
}