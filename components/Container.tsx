import React, { useEffect, useState } from "react"
import NextLink from "next/link"
import { NavItem, NavItemProps } from "./NavItem"
import { useTheme } from "next-themes"
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import { VscAccount, VscFile, VscHome, VscTools } from "react-icons/vsc"
import { Footer } from "./Footer"
import { motion } from "framer-motion"

interface ContainerProps {
  children?: React.ReactNode
}

const items: NavItemProps[] = [
  { href: "/", label: "Home", icon: <VscHome size={20} /> },
  {
    href: "/about",
    label: "About",
    icon: <VscAccount className="" size={20} />,
  },
  { href: "/projects", label: "Projects", icon: <VscTools size={20} /> },
  {
    href: "/resume",
    label: "Resume",
    icon: <VscFile size={20} />,
  },
]

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 dark:bg-black/10">
      <div className="max-w-3xl mx-auto w-full opacity-100">
        <div className="flex flex-col justify-center px-4 sm:px-8">
          <nav className="flex items-center justify-between py-4 sm:py-8">
            <div className="hidden sm:block justify-between space-x-4">
              {items.map((i, idx) => (
                <NavItem key={idx} href={i.href} label={i.label} />
              ))}
            </div>
            <div className="block sm:hidden justify-between space-x-1">
              {items.map((i, idx) => (
                <NextLink key={idx} href={i.href} passHref>
                  <a className="highlight inline-flex w-9 h-9 items-center justify-center">
                    {i.icon}
                  </a>
                </NextLink>
              ))}
            </div>
            {mounted && (
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="highlight w-9 h-9 bg-gray-100 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:ring-2 ring-gray-300 dark:ring-gray-500 transition-all"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                }}
              >
                {theme === "dark" ? (
                  <FaRegSun size={18} />
                ) : (
                  <FaRegMoon size={18} />
                )}
              </button>
            )}
          </nav>
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, type: "easeInOut" }}
            className="flex flex-col sm:px-3"
          >
            <div className="min-h-[70vh] mb-10">{children}</div>
            <Footer />
          </motion.main>
        </div>
      </div>
    </div>
  )
}
