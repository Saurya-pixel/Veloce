module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Courier New'", 'monospace'],
      },
      colors: {
        gold: {
          300: '#FBEB9F',
          400: '#F2D266',
          500: '#D4AF37',
          600: '#AA8529',
          700: '#80611E',
        }
      }
    },
  },
  plugins: [],
}
