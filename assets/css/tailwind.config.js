module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: [
    '**/*.html'
  ],
  theme: {
      minHeight: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
       'screen': '100vh'
    }, 
    extend: {
      height: ({
        "128": '18rem',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '3/4': '75%',        
      }),
      minWidth: ({
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '64': '16rem'
     }),   
     width: {
       "128": '18rem'
     },
     fontFamily: {
      'Italianno': ['Italianno'],
      'Alegreya': ['Alegreya Sans SC']
     }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
