/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        changaOne: ["Changa One", "sans -serif"]
      },
      colors: {
        primary: ['#25343F']
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}

