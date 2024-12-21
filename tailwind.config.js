/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "car-primary": "#e3740e ",
    },
  },
  plugins: [require("daisyui")],
};
