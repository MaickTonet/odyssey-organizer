/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202C39',
        secondary: '#283845',
        components: '#4169E1',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },

  },
  plugins: [],
}

