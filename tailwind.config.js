/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily :{
        'pop' : ['Poppins', 'sans-serif'],
        'philosopher' : ['Philosopher', 'sans-serif']
      },
      fontWeight: {
        bold: '600', // Add the bold variant
      },
      screens: {
        'sm': '390px',  // Target iPhone 5 screen size and smaller
        'md': '375px',  // Target iPhone 6/7/8 screen size and smaller
        'lg': '768px',  // Target iPhone 6/7/8 Plus screen size and smaller
      },
      height:{
        '100' : '35rem',
        '11' : '2.75rem',
        '27' : '8rem',
        '120' : '40rem',
        '200' : '180rem'
      },
    },
  },
  plugins: [],
}

