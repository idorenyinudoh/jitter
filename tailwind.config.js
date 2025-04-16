/** @type {import('tailwindcss').Config} */
export default {
  content: {
    'files': [
      './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './plugins/**/*.{js,ts,mjs}',
      './composables/**/*.{js,ts,mjs}',
      './utils/**/*.{js,ts,mjs}',
      './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      './app.config.{js,ts,mjs}',
      './app/spa-loading-template.html'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'twk-lausanne': ['TWK Lausanne', 'sans-serif']
      },
      colors: {
        'background': '#FFF',
        'primary': '#19171C',
        'primary-alt': '#FBA6EC',
        'secondary': '#6E6E73',
      }
    },
    screens: {
      'sm': '440px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1441px',
      '2xl': '1729px',
    }
  },
  plugins: [],
}

