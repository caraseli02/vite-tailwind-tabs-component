const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(10px)',
    },
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -30px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-15px, 15px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
