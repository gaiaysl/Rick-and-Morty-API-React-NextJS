/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode:'class', // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'king': "url('/img/background-king.jpg')"
       
      },
      colors: {
        'regal-green': '#5DD02C',
      
      },
    },
  },
  plugins: [],
}
