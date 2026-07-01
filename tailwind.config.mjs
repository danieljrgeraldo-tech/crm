/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        coal: "#0b0a09",
        graphite: "#141210",
        line: "rgba(255,255,255,.12)",
        gold: {
          100: "#fff3c4",
          300: "#e8c773",
          500: "#b98b36",
          700: "#7a521f"
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 34px rgba(185,139,54,.18)",
        card: "0 24px 80px rgba(0,0,0,.36)"
      }
    }
  },
  plugins: []
};
