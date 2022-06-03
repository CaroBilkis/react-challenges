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
      spaceDesktop:"url('./img/space/background-home-desktop.jpg')",
      spaceTablet:"url('./img/space/background-home-tablet.jpg')",
      spaceMobile:"url('./img/space/background-home-mobile.jpg')",
     
      spaceCrewDesktop:"url('./img/space/crew/background-crew-desktop.jpg')",
      spaceCrewTablet:"url('./img/space/crew/background-crew-tablet.jpg')",
      spaceCrewMobile:"url('./img/space/crew/background-crew-mobile.jpg')",
     
      spaceTechDesktop:"url('./img/space/tech/background-technology-desktop.jpg')",
      spaceTechTablet:"url('./img/space/tech/background-technology-tablet.jpg')",
      spaceTechMobile:"url('./img/space/tech/background-technology-mobile.jpg')",

      spaceDestinationDesktop:"url('./img/space/destination/background-destination-desktop.jpg')",
      spaceDestinationTablet:"url('./img/space/destination/background-destination-tablet.jpg')",
      spaceDestinationMobile:"url('./img/space/destination/background-destination-mobile.jpg')",
    
      mark:"url('./img/crew/image-mark-shuttleworth.png')",
      hurley:"url('./img/space/crew/image-douglas-hurley.png')",
      victor:"url('./img/space/crew/image-victor-glover.png')",
      anousheh:"url('./img/space/crew/image-anousheh-ansari.png')",

      launch:"url('./img/space/tech/image-launch-vehicle-landscape.jpg')",
      
      space:"url('./img/space/tech/image-space-capsule-landscape.jpg')",
      
      spacePort:"url('./img/space/tech/image-spaceport-landscape.jpg')",


      moon:"url('./img/space/destination/image-moon.png')",
      mars:"url('./img/space/destination/image-mars.png')",
      europa:"url('./img/space/destination/image-europa.png')",
      titan:"url('./img/space/destination/image-titan.png')",
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
      fontSize:{
        'h1':'150px',
        'h2':'100px',
        'h3':'56px',
        'h4':'32px',
        'h5':'28px',
        
        'h6':'80px',
        'h7':'40px',
        'h8':'24px',
        'h9':'20px',
      
        'sub-h1':'28px',
        'sub-h2':'14px',
        'nav-18':'18px',
        'nav-16':'16px',
        'nav-15':'15px',
        'nav-14':'14px',

      },
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

        'mobile': {'min': '375px', 'max': '767px'},
   
        'tablet': {'min': '768px', 'max': '991px'},
      
        'desktop': {'min': '992px'},
       
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
        '40':'40px',
        '60m': '60px',
        '80m':'80px',
        '100':'100px',
        '150':'150px',
        '153':'153.92px',
        '170':'170px',
        '177':'177.12px',
        '200':'220px',
        '242':'242px',
        '250':'250px',
        '226':'226.15px',
        '274':'274px',
        '280':'280px',
        '300':'300px',
        '310':'310px',
        '327':'327px',
        '340':'340px',
        '350':'350px',
        '360':'360px',
        '375':'375px',
        '380':'380px',
        '400':'400px',
        '420':'420px',
        '440':'440px',
        '444':'444px',
        '472':'472px',
        '480':'480px',
        '485':'483px',
        '490':'490px',
        '500':'500px',
        '520':'520px',
        '540':'540px',
        '573':'573px',
        '585':'585px',
        '610':'610px',
        '614':'614px',
        '650':'650px',
        '700':'700px',
        '712':'712px',
        '720':'720px',
        '788':'788px',
        '800':'508px',
        '820':'820px',
        '920':'920px',
        '1110':'1110px',
        '1140':'1140px',
        '1440':'1140px',
      },
      height: {
        '15':'60px',
        '40':'40px',
        '60m': '60px',
        '80m':'80px',
        '84':'84px',
        '110':'110px',
        '130':'130px',
        '150':'150px',
        '160':'160px',
        '170':'170px',
        '180':'180px',
        '200':'200px',
        '222':'222px',
        '223':'223px',
        '242':'242px',
        '274':'274px',
        '265':'265px',
        '300':'300px',
        '330':'330px',
        '360':'360px',
        '409':'409px',
        '480':'480px',
        '508':'508px',
        '530':'560px',
        '572':'572px',
        '590':'590px',
        '700':'700px',
        '760':'760px',
        '800':'800px',
        '920':'920px',
        '1024':'1024px',
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
      blur:{
        '4xl':'81px',
      }
    },
   
   
  },
  plugins: [],
}
