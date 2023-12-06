module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      '1300' : '1300px',
      'half' : '50%',
      'sevtwo' : '72%',
      'seventy' : '70%',
      'thirty' : '30%',
      'thirtwo' : '32%',
      'fourty' : '40%',
      'twentfiv' : '25%',
      'twentsev' : '27%',
      'fiftyfiv' : '55%',
      'sixty' : '60%',
      'sixtyfiv' : '65%',
      'sevfiv' : '75%',
      'eightfive' : '85%',
      'full' : '100%',
    },
    height: {
      'auto' : 'auto',
      '60' : '60px',
      '76' : '76px',
      '90' : '90px',
      '190' : '190px'
    },
    display: {
      'hidden' : 'none',
      'visible' : 'flex',
    },
    visibility: {
      'invisible' : 'hidden'
    },
    screens: {
      'xsm': '320px',
      'sm': '640px',
      'md': '1110px',
      'lg': '1290px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: theme => ({
        'mobile-hero-start-img': "url('https://storage.googleapis.com/mammafitness/public/web/images/hero-placeholder.jpg')",
        'desktop-hero-start-img': "url('https://storage.googleapis.com/mammafitness/public/web/images/hero_mama.jpg')",
        'desktop-newsletter-start-img': "url('https://storage.googleapis.com/mammafitness/public/web/images/newsletter-mama.jpg')",
       })
    },
  },
  variants: {
    extend: {
      padding: ['first']
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
   }
}
