// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/*Global dependencies and libraries */
require('~/assets/style/main.css')
import ('./assets/style/global.css')
import '~/assets/style/_variables.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSimpleAccordion from 'vue-simple-accordion';
import VueSlickCarousel from 'vue-slick-carousel';
import VueScreen from 'vue-screen';
import checkView from 'vue-check-view';

//Locales
import localeSv from './locales/sv-se.json';

//GTM & GA Tracking
import MammaFitnessDataLayer from '~/plugins/mammafitness-datalayer.js';

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  //Set libraries globally
  Vue.use(VueSlickCarousel);
  Vue.use(VueSimpleAccordion);
  Vue.use(checkView);
  Vue.use(VueScreen, 'tailwind');

  if (process.isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default;
    Vue.use(vueSmoothScroll);
  }

  // init GTM dataLayer
  var consent = {};
  if (isClient) {
    var klaroManager = window.klaro.getManager();
    var consent = klaroManager.consents;
    consent['confirmed'] = klaroManager.confirmed;
  }

  Vue.use(MammaFitnessDataLayer, {
      dataLayerInfo: {
        general: {
          lang: 'sv',
          countryCode: 'se',
          currency: 'SEK',
        },
        consent: consent,
      },
      isClient: isClient
  });

  //Locale MASTER switch for entire app
  Vue.prototype.$localeJSON = localeSv;

  head.htmlAttrs = { lang: Vue.prototype.$localeJSON.html.lang }

  // init GTM script
  head.script.push({
      type: 'text/javascript',
      innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W7L9WZS');"
  });

  //Add Google web font in Head
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  })

  //Add external bootstrap minified CSS
  head.link.push({
    rel: 'stylesheet',
    href: 'https://storage.googleapis.com/mammafitness/public/web/styles/mammafitness-bootstrap.min.css'
  })

  //Add Fontawesome Library CSS
  head.link.push({
    rel: 'stylesheet',
    href: 'https://storage.googleapis.com/mammafitness/public/web/libs/fontawesome-free-all.min.css'
  })

  //Add Favicons and Touchicons
  head.link.push({
    rel: 'shortcut icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-32x32.png',
    type: 'image/png'
  })

  //Add Mailchimp 'MammaFitness Sweden'-List in Head
  head.script.push({
    type: 'text/javascript',
    id: 'mcjs',
    innerHTML: '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/830c1baae23457cca56abb2fc/db3d0b1b6f81520988e914d23.js");'
  });

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-32x32.png',
    sizes: '32x32'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-120x120.png',
    sizes: '120x120'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-128x128.png',
    sizes: '128x128'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-152x152.png',
    sizes: '152x152'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-168x168.png',
    sizes: '168x168'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-180x180.png',
    sizes: '180x180'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '//storage.googleapis.com/mammafitness/public/web/favicon-196x196.png',
    sizes: '196x196'
  })
}