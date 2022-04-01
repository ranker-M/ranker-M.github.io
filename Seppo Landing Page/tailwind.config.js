module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "body": ['Rubik', 'sans-serif']
      },
      colors: {
        primary: '#47ea4e',
        "p-secondary": "#b3b3b3",
        "header": "#060606"
      },
      fontSize: {
        "title-mobile": ["40px", "105%"],
        "testimonial-p": ["28px", "170%"]
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
      lineHeight: {
        "opened": "120%",
        "slightly-opened": "110%"
      },
      backgroundImage: {
        'back-left-lines': "url('./images/on_black_left.png')",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'portfolio': 'minmax(0, 3fr) minmax(0, 6fr) minmax(0, 3fr)',
      }
    },
  },
  plugins: [],
}
