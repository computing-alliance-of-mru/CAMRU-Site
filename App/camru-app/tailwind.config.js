module.exports = {
  darkMode: 'media',
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
        'camru-blue5': '#0f7ca7',
        'camru-blue6': '#0183B0',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}