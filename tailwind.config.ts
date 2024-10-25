import type { Config } from "tailwindcss";
import { colors as defaultColors } from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        primary: "#071D2C",
        main: "#031322",
        accent: "#446171",
        accentSecondary: "#0A2737",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(0deg,rgba(254,137,31,1) 0%,rgba(254,182,35,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
