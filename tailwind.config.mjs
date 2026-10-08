/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F1ECE3",
          light: "#F8F5EF",
          dark: "#E8E2D6",
        },
        ink: "#191815",
        graphite: "#292722",
        muted: "#777166",
        line: {
          DEFAULT: "#CEC5B8",
          light: "#E0D9CE",
        },
        wine: {
          DEFAULT: "#642E2B",
          dark: "#4A2220",
        },
        copper: {
          DEFAULT: "#A46743",
          light: "#C2825D",
        },
        white: "#FCFBF8",
      },
      fontFamily: {
        display: ['"Newsreader Variable"', "Georgia", "serif"],
        sans: ['"Geist Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
        content: "1280px",
      },
    },
  },
  plugins: [],
};
