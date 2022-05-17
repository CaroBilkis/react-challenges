const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: { 
      backgroundImage: (theme) => ({
      dunes: "url('./img/landing/image-gallery-orange.jpg')",
      graphic:"url('./img/landing/image-graphic-design.jpg')",
      photography:"url('./img/landing/image-photography.jpg')",
      standout:"url('./img/landing/image-stand-out.jpg')",
      transform:"url('./img/landing/image-transform.jpg')",
      slider:"url('./img/pricing/icon-slider.svg')",
      pricing:"url('./img/pricing/bg-pattern.svg')",
      roomheader1:"url('./img/roomhome/desktop-image-hero-1.jpg')",
      roomheader2:"url('./img/roomhome/desktop-image-hero-2.jpg')",
      roomheader3:"url('./img/roomhome/desktop-image-hero-3.jpg')",
      roomheadermobile1:"url('./img/roomhome/mobile-image-hero-1.jpg')",
      roomheadermobile2:"url('./img/roomhome/mobile-image-hero-2.jpg')",
      roomheadermobile3:"url('./img/roomhome/mobile-image-hero-3.jpg')",
      roomdark:"url('./img/roomhome/image-about-dark.jpg')",
      roomlight:"url('./img/roomhome/image-about-light.jpg')",
     
    }),
      variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'group-disabled', // Custom variant
        'disabled',
      ],
      fontFamily:{
        'sans-serif': [' Kumbh Sans', 'sans-serif']
     
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1170px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      width: {
        '15':'15px',
        '17':'17px',
        '18':'18px',
        '19':'19px',
        '20':'20px',
        '21':'21px',
        '22':'22px',
        '23':'23px',

        '100':'100px',
        '200':'220px',
        '250':'250px',
        '280':'280px',
        '310':'310px',
        '340':'340px',
        '350':'350px',
        '360':'360px',
        '375':'375px',
        '380':'380px',
        '400':'400px',
        '420':'420px',
        '440':'440px',
        '472':'472px',
        '480':'480px',
        '485':'483px',
        '490':'490px',
        '500':'500px',
        '520':'520px',
        '540':'540px',
        '585':'585px',
        '610':'610px',
        '650':'650px',
        '700':'700px',
        '720':'720px',
        '800':'508px',
        '820':'820px',
        '920':'920px',
        '1110':'1110px',
        '1140':'1140px',
        '1440':'1140px',
      },
      height: {
        '15':'60px',
        '110':'110px',
        '130':'130px',
        '180':'180px',
        '200':'200px',
        '265':'265px',
        '330':'330px',
        '360':'360px',
        '409':'409px',
        '480':'480px',
        '508':'508px',
        '530':'560px',
        '590':'590px',
        '700':'700px',
        '760':'760px',
        '800':'800px',
        '920':'920px',
        '1920':'1920px',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        violet:colors.violet,
        indigo: colors.indigo,
        yellow: colors.yellow,
        lime: colors.lime,
        sky: colors.sky,
        orange: colors.orange,
      },
    },
   
   
  },
  plugins: [],
}
