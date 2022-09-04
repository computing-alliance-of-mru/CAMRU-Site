module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'camru-blue': '#023048',
        'camru-blue2': '#023756',
        'camru-blue3': '#015983',
        'camru-blue4': '#016A98',
      },
    },
  },
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}