/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F5E54',
        'primary-light': '#1A8F82',
        secondary: '#B14E00',
        'secondary-light': '#D67D3D',
        accent: '#DEB749',
        'accent-light': '#E9CD7C',
        neutral: '#D9D2C5',
        background: '#FFFFFF',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Almarai', 'sans-serif'],
      },
      fontSize: {
        'base': '18px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '44px',
        '6xl': '52px',
      }
    },
  },
  plugins: [],
  safelist: [
    'hover:bg-opacity-90',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:bg-accent'
  ]
}