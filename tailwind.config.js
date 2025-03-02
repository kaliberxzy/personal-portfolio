/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'button-border': '11px',
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
