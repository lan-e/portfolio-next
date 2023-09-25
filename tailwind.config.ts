import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // primary: "#6366f1",
      indigo: colors.indigo,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
export default config;
