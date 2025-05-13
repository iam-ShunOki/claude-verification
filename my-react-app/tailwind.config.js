/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#bae0ff",
          300: "#7cc5ff",
          400: "#36a9ff",
          500: "#0090ff",
          600: "#0077e6",
          700: "#005db3",
          800: "#004d99",
          900: "#003d7a",
        },
      },
    },
  },
  plugins: [],
};
