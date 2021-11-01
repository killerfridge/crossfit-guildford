const colors = require('tailwindcss/colors.js')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      screens:{
        'xs': '414px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        community: "url('https://static.wixstatic.com/media/da39dc_653669ad158f411e83a87277b82ccfa2~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/DSC00582_websize_edited.jpg')",
        overhead: 'url("https://static.wixstatic.com/media/da39dc_f60c741fe10a45f19060d70116ab028d~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/UNADJUSTEDNONRAW_thumb_4.jpg")',
        crossfit: 'url("https://static.wixstatic.com/media/da39dc_38a9cc46f49048f8917d026d66bf06a3~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/20210916_171850.jpg")',
        joining: 'url("https://static.wixstatic.com/media/da39dc_38a9cc46f49048f8917d026d66bf06a3~mv2.jpg/v1/fill/w_620,h_400,al_c,q_80,usm_0.66_1.00_0.01/20210916_171850.jpg")',
        pistol: 'url("https://static.wixstatic.com/media/da39dc_fafe0f972ff3437b846874a82053bc64~mv2.jpg/v1/fill/w_544,h_400,al_c,q_80,usm_0.66_1.00_0.01/IMG_1586_JPG.jpg")'
      }
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
      black: colors.black
    },
    fontFamily:{
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
