
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        secondary: "#00548B",
        background: "#212121",
        active: "#0D180E",
        twitter: "#1DA1F2",
        youtube: "#FF0000",
        linkedin: "#0077b5",
        rose_quartz: '#F8BBD0',
        light_sage_green: '#B8D3A1',
        dusty_blue: '#A4C5E8',
        soft_lavender: '#D6AEDD'
      },
    },
  },
  plugins: [],
}