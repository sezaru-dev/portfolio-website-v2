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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], 
      },
       keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0) skewX(0deg) scaleY(1)' },
          '25%': { transform: 'translateX(-50%) translateY(12px) skewX(-5deg) scaleY(1.05)' },
          '50%': { transform: 'translateX(-50%) translateY(0) skewX(0deg) scaleY(1)' },
          '75%': { transform: 'translateX(-50%) translateY(-12px) skewX(5deg) scaleY(0.95)' },
        },
      },
      animation: {
        wave: 'wave 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
