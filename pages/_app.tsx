import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
