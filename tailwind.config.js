const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        "gray-custom": "#181818",
        "black-custom": "#0F0F0",
        "black-custom-100": "#141414",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      textColor: {},
      colors: {
        primary: {
          "dark-blue": "#FFD180",
          "lime-green": "#B59B52",
          "bright-cyan": "#FCEAB8",
        },
        neutral: {
          "grayish-blue": "hsl(233, 8%, 62%)",
          "light-grayish-blue": "hsl(220, 16%, 96%)",
          "very-light-gray": "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
      backgroundImage: (theme) => ({
        "header-desktop": "url('/images/bg-intro-desktop.svg')",
        "header-mobile": "url('/images/bg-intro-mobile.svg')",
        "image-mockups": "url('/images/image-logo.svg')",
        "gradient-radial-gray-to-black":
          "linear-gradient(to left,  #000000, #3C3C3C, #000000)",
      }),
      backgroundSize: {
        "custom-mobile-header-size": "100% 50%",
        "custom-mobile-mockup-size": "auto 30%",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "1rem",
          "2xl": "4rem",
        },
      },
      inset: {
        "-42.6%": "-42.6%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
