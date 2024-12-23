/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "car-primary": "#e3740e ",
      "car-secondary": "#b45309 ",
      "car-white": "#ffffff ",
    },
  },
  plugins: [require("daisyui")],
};
