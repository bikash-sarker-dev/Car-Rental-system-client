/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "car-text": "#16110e",
      "car-background": "#fcfaf8",
      "car-primary": "#c17644",
      "car-secondary": "#e6b394",
      "car-accent": "#e98c4e",
      "car-info": "#FCF6EC",
    },
  },
  plugins: [require("daisyui")],
};
