/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealLight: '#30b5a2',
        tealDark: '#0f9886',
      },

    },
  },
  plugins: [],
}

