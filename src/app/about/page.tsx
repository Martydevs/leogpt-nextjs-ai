import MainLayout from "@/components/layouts/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'LeoGPT - Acerca de',
}

function AboutPage() {
  return (
    <MainLayout>
      <section className="h-full w-full flex flex-col items-center gap-8 py-6 px-4 md:py-8 lg:py-14">
        <section className="w-full flex flex-col items-start">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacidad y Términos
          </h1>
          <p className="mt-2 text-muted-foreground">
            Conoce qué es lo que recolectaremos, usaremos y protegemos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold" id="privacy-policy">
            Políticas de privacidad
          </h2>
          <div className="mt-4 flex flex-col items-start gap-4 text-muted-foreground">
            <p>
              En LeoGPT, valoramos su privacidad y nos comprometemos a proteger
              la información personal que usted comparte con nosotros. Esta
              Política de Privacidad explica cómo recopilamos, utilizamos,
              divulgamos y protegemos su información cuando utiliza nuestro
              chatbot y nuestros servicios relacionados.
            </p>
            <p>
              Recolectamos información personal como: nombre, apellido y correo
            </p>
            <p>
              Nos esforzamos mucho por proteger sus datos y utilizamos medidas
              de seguridad estándar de la industria para evitar el acceso o
              divulgación no autorizados. Nunca venderemos ni compartiremos su
              información personal con terceros sin su consentimiento, excepto
              cuando la ley lo exija o para cumplir con nuestras obligaciones
              contractuales.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold" id="terms-of-use">
            Términos de uso
          </h2>
          <div className="mt-4 text-muted-foreground flex flex-col items-start gap-4">
            <p>Al usar LeoGPT, usted acepta los siguientes términos de uso:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Usted acepta utilizar el chatbot de LeoGPT de manera adecuada y
                conforme a la ley aplicable y a estos Términos. No debe utilizar
                el servicio de manera que pueda dañar, sobrecargar o deteriorar
                la disponibilidad o accesibilidad del servicio para otros
                usuarios.
              </li>

              <li>
                El chatbot de LeoGPT y todos los derechos de propiedad
                intelectual asociados son propiedad de LeoGPT. Usted reconoce
                que no adquiere ningún derecho de propiedad sobre el chatbot más
                allá del derecho limitado de usar el servicio de acuerdo con
                estos Términos.
              </li>
            </ul>
            <p>
              Si tiene alguna pregunta o consulta sobre los Términos de uso o
              relacionado con el producto, no dude en contactar con nosotros.
            </p>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}

export default AboutPage;
