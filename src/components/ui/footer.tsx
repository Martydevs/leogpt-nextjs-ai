import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
      <footer className="bg-muted p-4 md:p-6 w-full mt-auto self-end relative bottom-0">
        <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {year} LeoGPT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/about/#privacy-policy" className="text-sm hover:underline mr-4" prefetch={false}>
              Políticas de privacidad
            </Link>
            <Link href="/about/#terms-of-use" className="text-sm hover:underline" prefetch={false}>
              Términos de uso
            </Link>
          </div>
        </div>
      </footer>
  );
}
