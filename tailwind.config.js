/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
        fourth: "var(--fourth-color)",
        fifth: "var(--fifth-color)",
        sixth: "var(--sixth-color)",
        seventh: "var(--seventh-color)",
        eighth: "var(--eighth-color)",
      },
    },
  },
  plugins: [],
}

