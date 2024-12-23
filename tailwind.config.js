/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        buttonColor:"#407ED1"
      },
      boxShadow:{
        ham:"0px 1px 10px 0px rgba(0,0,0,.1)"
      }
    },
  },
  plugins: [],
}

