const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0093BF",
          900: "#006685",
        },
        green: {
          100: "#05FAE4",
          500: "#06C4B2",
        },
      },
      fontFamily: {
        "monument": ["monument"],
        "sora-bold": ["sora-bold"],
        "sora-extrabold": ["sora-extrabold"],
        "sora-extralight": ["sora-extralight"],
        "sora-light": ["sora-light"],
        "sora-medium": ["sora-medium"],
        "sora-regular": ["sora-regular"],
        "sora-semibold": ["sora-semibold"],
        "sora-thin": ["sora-thin"],
      },
      // backgroundImage: {
      //   blurry: "url('./public/blurry.svg')",
      // },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".neon": {
          background: "transparent",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(122px)",
          "-webkit-backdrop-filter": "blur(122px)",
        },
      });
    }),
  ],
};
