import Link from "next/link";
import { Separator } from "./separator";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div className="w-full h-auto self-end">
      <footer className="bg-muted p-4 md:p-6 w-full mt-auto">
        <div className="container max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {year} LeoGPT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/about/#privacy-policy" className="text-sm hover:underline" prefetch={false}>
              Políticas de privacidad
            </Link>
            <Separator orientation="vertical" />
            <Link href="/about/#terms-of-use" className="text-sm hover:underline" prefetch={false}>
              Términos de uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
