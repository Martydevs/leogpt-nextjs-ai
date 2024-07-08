import Navbar from "@/components/ui/navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section className="h-screen w-full lg:w-3/4 md:3/4 m-auto flex flex-col items-center justify-between">
        {children}
      </section>
    </main>
  );
}

export default MainLayout;
