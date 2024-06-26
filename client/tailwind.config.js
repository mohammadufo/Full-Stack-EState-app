/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const customColors = {
  primary: '#00b96b',
  bg: '#fcf5f3',
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  container: '#root',
  theme: {
    screens: {
      sm: '738px',
      md: '1024px',
      lg: '1366px',
    },
    fontSize: {
      xxs: '.75rem',
      xs: '.8125rem',
      sm: '.875rem',
      tiny: '.9375rem',
      base: '1rem',
    },
    extend: {
      colors: {
        ...customColors,
      },
      boxShadow: {
        card: '0 2px 8px #00000026',
        'card-hover': '0 5px 12px #0003',
      },
      height: {
        96: '28rem',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans-serif': ['sans-serif'],
      iranyekan: ['YekanBakh'],
      'material-icon': ['Material Symbols Outlined'],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ':root': {
          ...mapColors(customColors),
        },
        '.container-lg': {
          maxWidth: '1300px',
          width: '100%',
          margin: 'auto',
        },
      })
    }),
  ],
}

const mapColors = (colors) => {
  let object = {}
  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}
