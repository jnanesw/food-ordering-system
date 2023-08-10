/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bungee': ['Bungee Spice', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'luman': ['Lumanosimo', 'cursive'],
        'sora': ['Sora', 'sans-serif'],
      },
      backgroundImage:{
        'glass': ["./src/assets/bg-glass.jpg"]
      },
      colors: {
        'custom': 'rgb(236, 135, 5)',
      }
    },
  },
  plugins: [],
}