/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: { brand: "#3182ff", ink: "#0b0b0c" },
      fontFamily: {
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
        ],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
        ],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite", // <- we’ll use this class
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
