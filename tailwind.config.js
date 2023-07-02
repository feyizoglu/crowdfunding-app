/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greenColor: '#D4EE25',
        blackColor: '#0A0A0A',
        grayishColor: '#E9E9E9',
        whiteColor: '#FAFAFA'
      },
      borderRadius: {
        needed: '0.375rem',
      }
    },
  },
  plugins: [],
}
