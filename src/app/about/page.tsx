import MainLayout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";

function AboutPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Privacidad y Términos
              </h1>
              <p className="mt-2 text-muted-foreground">
                Conoce qué es lo que recolectaremos, usaremos y protegemos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold" id="privacy-policy">
                Políticas de privacidad
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  En LeoGPT, valoramos su privacidad y nos comprometemos a
                  proteger la información personal que usted comparte con
                  nosotros. Esta Política de Privacidad explica cómo
                  recopilamos, utilizamos, divulgamos y protegemos su
                  información cuando utiliza nuestro chatbot y nuestros
                  servicios relacionados.
                </p>
                <p>
                  Recolectamos información personal como: nombre, apellido y
                  correo
                </p>
                <p>
                  Nos esforzamos mucho por proteger sus datos y utilizamos
                  medidas de seguridad estándar de la industria para evitar el
                  acceso o divulgación no autorizados. Nunca venderemos ni
                  compartiremos su información personal con terceros sin su
                  consentimiento, excepto cuando la ley lo exija o para cumplir
                  con nuestras obligaciones contractuales.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold" id="terms-of-use">
                Términos de uso
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Al usar LeoGPT, usted acepta los siguientes términos de uso:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Usted acepta utilizar el chatbot de LeoGPT de manera
                    adecuada y conforme a la ley aplicable y a estos Términos.
                    No debe utilizar el servicio de manera que pueda dañar,
                    sobrecargar o deteriorar la disponibilidad o accesibilidad
                    del servicio para otros usuarios.
                  </li>

                  <li>
                    El chatbot de LeoGPT y todos los derechos de propiedad
                    intelectual asociados son propiedad de LeoGPT. Usted
                    reconoce que no adquiere ningún derecho de propiedad sobre
                    el chatbot más allá del derecho limitado de usar el servicio
                    de acuerdo con estos Términos.
                  </li>
                </ul>
                <p>
                  Si tiene alguna pregunta o consulta sobre los Términos de uso
                  o relacionado con el producto, no dude en contactar con
                  nosotros.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
