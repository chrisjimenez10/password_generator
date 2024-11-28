/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textColor: "rgba(var(--textColor))",
        bgColor: "rgba(var(--bgColor))",
        bgColorContrast: "rgba(var(--bgColorContrast))",
        bgSurface: "rgba(var(--bgSurface))",
      }
    },
  },
  plugins: [],
}

