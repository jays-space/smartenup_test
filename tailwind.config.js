/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Ondo", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "#2D1E6B",
      body: colors.white,
      violet: {
        ...colors.violet,
        [950]: "#2D1E6B",
      },
      zinc: {
        [300]: "#D9D9D9",
      },
      fuchsia: { ...colors.fuchsia, [950]: "#DD00B8" },
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
};
