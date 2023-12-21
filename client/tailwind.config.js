/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.js}",
    "./src/**/*.jsx}",
    "./src/**/*.ts}",
    "./src/**/*.tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "700px",
      },
    },
  },
  plugins: [],
};
