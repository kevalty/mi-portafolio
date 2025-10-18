/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Usaremos 'Inter' como fuente principal, similar al ejemplo
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Lora', 'serif'], // Mantenemos Lora para títulos si te gusta
      },
      // Nueva paleta de colores oscuros con acento púrpura
      colors: {
        'background': '#111111',       // Fondo principal muy oscuro
        'primary': '#1A1A1A',         // Un gris oscuro para tarjetas y secciones
        'accent': '#8A2BE2',          // Púrpura vibrante (similar a #6A0DAD)
        'accent-hover': '#7B1FA2',    // Púrpura más oscuro para hover
        'text-light': '#EAEAEA',      // Texto principal claro
        'text-secondary': '#A0A0A0',   // Texto secundario grisáceo
        'border-color': '#333333',     // Bordes sutiles
      },
      // Añadimos una animación simple para hover
      transitionProperty: {
        'bg': 'background-color',
      },
    },
  },
  plugins: [],
}