
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./dropdown-menu"
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"
import { PropsWithChildren } from "react"

interface NavbarDropdownProps extends PropsWithChildren {
  triggerButton: JSX.Element
}

function NavbarDropdownMenu({ triggerButton, children }: NavbarDropdownProps) {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      {triggerButton}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-auto mx-auto p-2">
      {children}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default NavbarDropdownMenu