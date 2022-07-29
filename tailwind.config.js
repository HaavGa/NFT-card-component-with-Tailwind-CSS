/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(178, 100%, 50%)",
          200: "hsl(215, 51%, 70%)",
        },
        neutral: {
          100: "hsl(215, 32%, 27%)",
          200: "hsl(216, 50%, 16%)",
          300: "hsl(217, 54%, 11%)",
        },
      },
      fontFamily: {
        main: ["Outfit"],
      },
    },
  },
  plugins: [],
};
