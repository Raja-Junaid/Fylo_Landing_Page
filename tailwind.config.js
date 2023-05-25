/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        Black: "#000000",
        darkBlue1: "hsl(217, 28%, 15%)",
        darkBlueMain: "hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBlueTesti: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },

      gridTemplateColumns: {
        custom: "1fr 1fr",
      },
    },
  },
  plugins: [],
};
