module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "facebook" : "#4267B2", // facebook logo color
        "linkedin" : "#0e76a8", // linkedin logo color
        "instagram" : "#8a3ab9", // instagram logo color

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
