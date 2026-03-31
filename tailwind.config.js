/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'background': '#0a0a0a',
        'primary': '#141414',
        'accent': '#8A2BE2',
        'accent-hover': '#7B1FA2',
        'text-light': '#EAEAEA',
        'text-secondary': '#A0A0A0',
        'border-color': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
