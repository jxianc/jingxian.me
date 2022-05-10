const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          0: "#fff",
          100: "#ebebeb",
          200: "#c4c4c4",
          300: "#adadad",
          400: "#999999",
          500: "#888888",
          600: "#666666",
          700: "#444444",
          800: "#333333",
          900: "#222222",
        },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.200"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
