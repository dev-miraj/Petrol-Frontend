/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#F40404',
        'secondary': '#6C6C6C',
        'yellowborder': '#FFB800',
        'headerbg': '#282828',
        'darklight': 'rgba(0,0,0,0.6)'
      },
      maxWidth: {
        'container': '1144px',
      },
      screens: {
        sm:'375px',
        sml: '667px',
        md:'768px'
      },
  
    },
  }
}