/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'ppala': '#25434D', // Reemplaza '#ff5733' con el valor de tu color personalizado
      'verde': '#019B74',
      'verdehover':'#028765',
      'texto1':'#597C87'
    }},
  },
  plugins: [],
}

