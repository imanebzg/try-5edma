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
        "light-text": "#F2F2F2",
        "neutral-1": "#F4F4F4",
        "neutral-2": "#D0D0D0",
        success: "#3CC313",
        pending: "#FFC300",
        error: "#D40909",
      },

      fontFamily: {
        main: ["Roboto", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
      },
    },
  },
  plugins: [],
};
