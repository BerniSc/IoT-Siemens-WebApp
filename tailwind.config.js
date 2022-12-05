const colors = require('tailwindcss/colors')

module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      width: {
        'big': '32%',
        'med': '47%',
      },
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        siemenspetrol: '#009999',
        softgreen: '#00d7a0',
        softblue: '#00bedc',
        lightsand: '#f3f3f0',
        deepblue: '#000028',
        deepbluelight: '#001034',
        deepblue80pc: '#333353',
        deepblue40pc: '#9999a9',
        siemensblue: '#0087be',
        softgrey: '#ccccd4',
        darkgrey: '#66667e',
        darkgreen: '#00646E',
        boldgreen: '#00FFB9',
        siemensgreen: '#00AF8E',
        darkbg: '#171822',
        darkbar: '#1b1f2b',
        darkcard: '#2f3646',

      },
      spacing: {
        88: '22rem',
      },
      height: {
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      scale: ['group-hover'],
      shadow: ['hover'],
      width: ["responsive", "hover", "focus", "group-hover"],
      translate: ['group-active', 'active'],
      background:['hover']
    },
  },
  plugins: [],
};




