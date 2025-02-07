/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue-1": "#1185F9",
        "primary-blue-2": "#CAE9FF",
        "accent-blue-1": "#052863",
        "accent-blue-2": "#596986",
        "dark-text": "#06141F",
        "neutral-1": "#F6F6F6",
        "neutral-2": "#F0F0F0",
        success: "#3CC313",
        pending: "#FFC300",
        error: "#D40909",
      },

      fontFamily: {
        main: ["Roboto", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
