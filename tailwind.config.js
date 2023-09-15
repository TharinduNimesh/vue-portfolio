/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,html}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url(/public/img/cursor.png), default',
        pointer: 'url(/public/img/pointer.png), pointer',
      },
      fontFamily: {
        'monteserrat': ['Montserrat', 'sans-serif'],
        'monteserrat-alt': ['Montserrat Alternates', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

