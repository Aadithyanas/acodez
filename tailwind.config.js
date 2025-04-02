/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-left': 'floatLeft 8s ease-in-out infinite',
        'float-right': 'floatRight 8s ease-in-out infinite',
      },
      keyframes: {
        floatLeft: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(10px, -10px) rotate(5deg)' },
        },
        floatRight: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-10px, -10px) rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
} 