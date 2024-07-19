"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { House, LogIn, LogOut, UserCircle, UserPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { ModeToggle } from "./theme-toggle";
import { shortUser } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Skeleton } from "./skeleton";

const DropdownMenu = dynamic(
  () => import("./navbar-dropdown"),
  {
    loading: () => <Skeleton className="w-40 h-10 rounded-xl" />,
    ssr: false,
  }
)

export default function Navbar() {
  const path = usePathname();
  const { isAuthenticated, getUser } = useKindeBrowserClient();
  const user = getUser();

  return (
    <nav className="min-w-full max-w-7xl p-6 border-b-2">
      <section className="mx-auto container flex justify-between items-center">
        <Link href="/">
          <Button variant={"outline"} type="button" className="py-6">
            <span className="inline-flex animate-background-shine bg-[linear-gradient(129deg,#ff002c,45%,#000,75%,#ff002c)] bg-[length:200%_100%] bg-clip-text text-xl text-transparent">
              <p className="font-bold text-3xl">LeoGPT</p>
            </span>
          </Button>
        </Link>
        <section className="flex items-center justify-center gap-3">
          {path === "/chat" && (
            <Link href="/">
              <Button size={"icon"} variant={"outline"}>
                <House size={24} />
              </Button>
            </Link>
          )}

          <ModeToggle />

          <span className="flex flex-col items-center justify-between gap-2 *:border *:p-2 *:rounded-xl md:flex-row lg:flex-row">
            <DropdownMenu
              triggerButton={
                <Button variant={"ghost"} size={`${isAuthenticated ? "default" : "icon"}`} className="flex items-center gap-2 max-w-lg">
                  <UserCircle size={24} />
                  {isAuthenticated && <p>{shortUser(user?.email)}</p>}
                </Button>
              }
            >
              {!isAuthenticated ? (
                <span className="w-full h-auto flex flex-col items-center gap-2">
                  <LoginLink>
                    <Button variant={"ghost"} className="flex items-center gap-2">
                      <LogIn size={24} />
                      Iniciar sesión
                    </Button>
                  </LoginLink>
                  <RegisterLink>
                    <Button variant={"ghost"} className="flex items-center gap-2">
                      <UserPlus size={24} />
                      Crear cuenta
                    </Button>
                  </RegisterLink>
                </span>
              ) : (
                <LogoutLink>
                  <Button variant={"ghost"} className="flex items-center gap-2">
                    <LogOut size={24} />
                    <p>Cerrar sesión</p>
                  </Button>
                </LogoutLink>
              )}
            </DropdownMenu>
          </span>
        </section>
      </section>
    </nav>
  );
}
