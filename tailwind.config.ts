import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx,json}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        border: "rgb(var(--border))"
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "72rem"
        }
      }
    }
  },
  plugins: []
};
export default config;
