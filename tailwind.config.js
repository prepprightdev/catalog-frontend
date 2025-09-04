/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b67c2",          // main brand blue
        primaryDark: "#0955a0",      // darker blue for hover/active
        primaryLight: "#93c5fd",     // lighter blue for gradients
        accent: "#005bac",           // optional accent/dark blue
        yellow: "#facc15",           // yellow accent consistent with design
        white: "#ffffff",            // pure white
        grayLight: "#f5f7fa",        // light gray background
        grayDark: "#333333",         // dark gray text
      },
    },
  },
  plugins: [],
}
