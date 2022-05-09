import { useRouter } from "next/router"
import NextLink from "next/link"
import React from "react"
import { cn } from "../utils/classname"

export interface NavItemProps {
  children?: React.ReactNode
  href: string
  label: string
  icon?: JSX.Element
}

export const NavItem: React.FC<NavItemProps> = ({ children, href, label }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href} passHref>
      <a
        className={cn(
          isActive
            ? "font-semibold bg-gray-100/80 dark:bg-gray-900"
            : "font-normal",
          "highlight hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md px-3 h-9 inline-flex items-center",
        )}
      >
        {label}
      </a>
    </NextLink>
  )
}
