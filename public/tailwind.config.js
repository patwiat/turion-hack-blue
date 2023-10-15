/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        // custom: "0 2px 10px rgba(255,255, 255, 0.35)",
        glow: [
          "0 0px 8px rgba(255,255, 255, 1)",
          "0 0px 20px rgba(255, 255,255, 1.3)",
        ],
      },
    },
  },
  plugins: [],
};
