import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        blob: "hsl(var(--blob) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], 
      },
    },
  },
  plugins: [],
  darkMode: "class", // for next-themes
};
export default config;