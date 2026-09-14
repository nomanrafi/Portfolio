import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050B14",
          900: "#08101F",
          850: "#0D182E",
          800: "#122342",
          750: "#182E56",
          700: "#203A6B",
        },
        navy: {
          950: "#060D1A",
          900: "#0A162B",
          800: "#102344",
          700: "#193566",
          600: "#224788",
        },
        brand: {
          blue: "#2563EB",
          light: "#3B82F6",
          sky: "#60A5FA",
          ice: "#93C5FD",
          glow: "rgba(37, 99, 235, 0.25)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "dark-radial": "radial-gradient(ellipse at top, #0D1B36 0%, #050B14 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(16, 35, 68, 0.75) 0%, rgba(8, 16, 31, 0.85) 100%)",
      },
      boxShadow: {
        "blue-soft": "0 10px 30px -10px rgba(37, 99, 235, 0.25)",
        "blue-glow": "0 0 25px 2px rgba(59, 130, 246, 0.3)",
        "card-depth": "0 15px 35px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.12)",
        "card-hover": "0 20px 40px -5px rgba(2, 6, 23, 0.7), 0 0 30px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(96, 165, 250, 0.3)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
