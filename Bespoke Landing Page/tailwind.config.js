module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "body": ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#fd0060',
        "gray": "#808080"
      },
      lineHeight: {
        'title': '120%'
      },
      letterSpacing: {
        "2px": "2px",
        "4px": "4px"
      },
      height: {
        "thin": "3px"
      },
      maxWidth: {
        "screen-1.5xl": "1450px"
      },
    },
  },
  plugins: [],
}
