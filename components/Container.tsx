import React, { useEffect, useState } from "react"
import NextLink from "next/link"
import { NavItem, NavItemProps } from "./NavItem"
import { useTheme } from "next-themes"
import { FaRegMoon, FaRegSun } from "react-icons/fa"
import { VscAccount, VscFile, VscHome, VscTools } from "react-icons/vsc"
import { Footer } from "./Footer"
import { AnimatePresence, motion } from "framer-motion"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

const items: NavItemProps[] = [
  { href: "/", label: "Home", icon: <VscHome size={20} /> },
  // {
  //   href: "/about",
  //   label: "About",
  //   icon: <VscAccount className="" size={20} />,
  // },
  { href: "/projects", label: "Projects", icon: <VscTools size={20} /> },
  // {
  //   href: "/resume",
  //   label: "Resume",
  //   icon: <VscFile size={20} />,
  // },
]

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

interface ContainerProps {
  children?: React.ReactNode
  title?: string
  description?: string
  ogType?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  ...customMeta
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const router = useRouter()

  const meta = {
    title: "Jingxian Chai",
    description: "Full-Stack Developer && Computer Science Student",
    ogType: "website",
    ...customMeta,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-gray-50 dark:bg-black/10">
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={`https://jingxian.me${router.asPath}`}
        openGraph={{
          type: meta.ogType,
          title: meta.title,
          site_name: "Jingxian Chai",
          description: meta.description,
          images: [
            {
              url: "https://jingxian.me/favicons/android-chrome-512x512.png",
              type: "image/png",
              alt: "jingxianlogo",
              width: 512,
              height: 512,
            },
          ],
        }}
      />
      <div className="min-h-screen overflow-hidden">
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
                <AnimatePresence exitBeforeEnter initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.25, type: "easeInOut" }}
                  >
                    <button
                      aria-label="Toggle Dark Mode"
                      type="button"
                      className="highlight w-9 h-9 bg-gray-100 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:ring-2 ring-gray-300 dark:ring-gray-500 transition-all"
                      onClick={() => {
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      }}
                    >
                      {resolvedTheme === "dark" ? (
                        <FaRegSun size={18} />
                      ) : (
                        <FaRegMoon size={18} />
                      )}
                    </button>
                  </motion.div>
                </AnimatePresence>
              )}
            </nav>
            <motion.main
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3, type: "easeInOut" }}
              className="flex flex-col sm:px-2"
            >
              <div className="min-h-[70vh] mb-10">{children}</div>
              <Footer />
            </motion.main>
          </div>
        </div>
      </div>
    </div>
  )
}
