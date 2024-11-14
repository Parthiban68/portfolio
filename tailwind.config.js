/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-cyan': '#91EAE4',
        'custom-light-blue': '#86A8E7',
        'custom-medium-blue': '#7F7FD5',
        'custom-white':'#FFFAFA'
      },
    },
  },
  plugins: [],
}