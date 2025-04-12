/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
      'tablet': '866px',
     
    },





      textColor: {
        prim: " #1D2130",
        par: " #43495B",
        danger: ' #0C96E2',
        bat: " #344054",
        batt: " #98A2B3",
        contact: "#92929D"


      },
     
      letterSpacing:
      {
        'custom': '0.1rem'

      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '  #583FBC',
        'secondary': ' #7B55EC',
        'danger': ' #0C96E2',
        'dang': ' #0C92E1',
        'circle': '#D3D5D6',
        "box": " #583FBC",
        'cir': " #7DE0EA"

      }),
      spacing: {
        '72': '90px',
        sm: '10px',
        md: '12px',
        '33': '35px',
        lg: '220px',
        xl: '250px',
        ic: '53px',
        iche: '56px',
        widthpro: '85%',
        line: "450px",
        introsection: "23%"

      },
      fontFamily: {
        "popp": ["Poppins"]
      },
      fontSize: {
        "size": "18px",
        "title": "55px",
        "abou": "30px",
        "me": "20px",
        'intro': '20px',
        "con": "14px",
        "res": "10px"
      },
      borderRadius: {
        "but": "6px"
      },
      borderColor: theme => ({
        ...theme('colors'),
        'secondary': '#1D2130',
        'bordercontact': ' #BEC0BF',
        'btn': ' #FFFFFF99',
        'danger': '#0C96E2'

      })
    },
  },
  plugins: [],
}

