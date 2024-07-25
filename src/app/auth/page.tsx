"use client";

import MainLayout from "@/components/layouts/main";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "../actions";
import { toast } from "sonner";
import { FormEvent, useRef, useState } from "react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    const { nickname } = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );
    const result = await createUser({ nickname: nickname as string });

    if (result.isSuccess) {
      toast.success(result.message);
      setIsLoading(false);
      formRef.current?.reset();
      router.push("/chat");
    } else {
      setIsLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <MainLayout>
      <section className="w-full h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader className="flex flex-row items-start justify-between">
            <span className="flex flex-col items-start justify-center">
              <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
              <CardDescription className="text-pretty">
                Ingresa un apodo para iniciar a chatear con Leo.
              </CardDescription>
            </span>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Info size={20} className="text-primary" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-64 bg-transparent backdrop-blur-xl"
                side="top"
              >
                <p className="text-pretty text-sm">
                  Iniciarás un chat temporal sin historial al ingresar tu apodo.
                </p>
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <form
              autoComplete="off"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <Label htmlFor="email">Apodo</Label>
              <Input
                id="nickname"
                name="nickname"
                type="text"
                placeholder="john.doe"
                required
              />
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Continuar"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col border-t items-center justify-center py-2">
            <p className="text-sm text-center text-pretty text-zinc-400">
              Para iniciar con historial de conversaciones
            </p>
            <RegisterLink>
              <Button size={"sm"} variant={"link"}>
                Da click aqui
              </Button>
            </RegisterLink>
          </CardFooter>
        </Card>
      </section>
    </MainLayout>
  );
}
