/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding: '16px',
    },
    extend: {
      colors:{
        ungu: '#9333ea',
      },
      fontFamily:{
        titillium:['Titillium'],
        roboto:['Roboto+Mono'],
      },
    },
  },
  plugins: [],
}

