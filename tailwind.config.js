import { body } from 'framer-motion/client';

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
        'custom-white':'#FFFAFA',
        customBlue: 'hsla(215, 98%, 61%, 1)',
        customGreen: 'hsla(125, 98%, 72%, 1)',
        customRed: 'hsla(354, 98%, 61%, 1)',
        customPurple: 'hsla(256, 96%, 67%, 1)',
        customYellow: 'hsla(38, 60%, 74%, 1)',
        customIndigo: 'hsla(222, 67%, 73%, 1)',
        customPink: 'hsla(343, 68%, 79%, 1)',
        "primary":"#01051e",
        "cricleone":"#A427DF",
        "cricletwo":"#ff7d3b",
        "bgdark":"#151515",
        "sibg":"#f1fbff",
        "lightmode":"#ede7de",
        "lightcard":"#f2eae2",
        "heading":"#30756a",
        "body":"#90a9a2",
        "head":"#126458"
      },
      fontFamily:{
        heading:['Bangers'],
        bodys:['Poppins'],
        // secbody:['Satisfy'],
        head:['Bruno Ace SC']
      },
    },
  },
  plugins: [
  ],
}