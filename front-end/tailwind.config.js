/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          'from': {
              opacity: '1',
          },
          'to': {
              opacity: '0',
          },
        },
        bol: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(300%, 30%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        pongleft: {
          '0%': { transform: 'translateY(0)' },
          '5%': { transform: 'translateY(10px)' },
          '10%': { transform: 'translateY(20px)' },
          '15%': { transform: 'translateY(30px)' },
          '20%': { transform: 'translateY(40px)' },
          '25%': { transform: 'translateY(50px)' },
          '30%': { transform: 'translateY(60px)' },
          '35%': { transform: 'translateY(50px)' },
          '40%': { transform: 'translateY(40px)' },
          '45%': { transform: 'translateY(30px)' },
          '50%': { transform: 'translateY(20px)' },
          '55%': { transform: 'translateY(10px)' },
          '60%': { transform: 'translateY(0)' },
          '65%': { transform: 'translateY(-10px)' },
          '70%': { transform: 'translateY(-20px)' },
          '75%': { transform: 'translateY(-30px)' },
          '80%': { transform: 'translateY(-45px)' },
          '85%': { transform: 'translateY(-35px)' },
          '90%': { transform: 'translateY(-25px)' },
          '95%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        squa:{
          '0%': { left: '0' },
          '50%': { left: '100%' },
          '100%': { left: '-100%' },
        }
      },
      animation: {
        'fadeOut': 'fade-out 1s ease-out',
        'bol': 'bol 4s infinite',
        'pongleft': 'pongleft 3s infinite',
        squa: 'squa 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),

  ],
}
