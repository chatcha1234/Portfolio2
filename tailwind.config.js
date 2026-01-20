/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        text: "#f8fafc",
        "text-secondary": "#94a3b8",
        primary: "#38bdf8",
        secondary: "#818cf8",
        accent: "#f472b6",
        "card-bg": "#1e293b",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
