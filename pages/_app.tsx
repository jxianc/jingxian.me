import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import { isServer } from "utils/is-server"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (!isServer()) {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp
