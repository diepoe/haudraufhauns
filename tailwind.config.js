const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css', './index.html'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.sky
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "IBM Plex Mono",
            h1: {
              fontWeight: "500",
              fontFamily: "IBM Plex Mono",
            },
            h2: {
              fontWeight: "500",
              fontFamily: "IBM Plex Mono",
            },
            h3: {
              fontWeight: "500",
              fontFamily: "IBM Plex Mono",
            },
            h4: {
              fontWeight: "500",
              fontFamily: "IBM Plex Mono",
            },
            mark: {
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(to right, #FDE047, #FBBF24, #FDE047, #FBBF24, #FDE047);",
              borderRadius: "0.375rem",
              padding: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
