// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
    tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/style/_variables.scss')
            ],
        })
}

module.exports = {
    siteName: 'MammaFitness',
    siteUrl: 'https://www.mammafitness.se',
    pathPrefix: '/se/',
    titleTemplate: '%s',
    plugins: [
        {
        use: '@gridsome/source-wordpress',
        options: {
            baseUrl: 'http://api-wordpress-dot-mammafitness.appspot.com/',
            //baseUrl: 'https://dev-dot-api-wordpress-dot-mammafitness.appspot.com/', // Dev WP
            apiBase: 'wp-json',
            typeName: 'Wordpress',
            }
        },
        {
            use: "gridsome-source-rest",
            options: {
              debug: false,
              endpoint: "https://ptonline.mammafitness.se/api/v2/www/coaches/",
              typeName: "Coaches",
              isStatic: false,
              isCollection: true,
            }
        },
      {
        use: '@gridsome/plugin-sitemap',
        options: {
          //exclude: ['/exclude-me'],
          config: {
            '/traning/': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/kost/': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/motivation/': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/sa-funkar-det/': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/artiklar/*': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/vara-coacher/*': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/medlemskap/*': {
              changefreq: 'weekly',
              priority: 0.5,
              lastmod: '2021-08-12',
            },
            '/vara-mamas/': {
                changefreq: 'weekly',
                priority: 0.5,
                lastmod: '2021-08-12',
            }
          }
        }
      },
        {
            use: 'klaro-gridsome',
            options: {
                acceptAll: true,
                lang: 'sv',
                privacyPolicy: '/se/cookies/',
                cookieName: 'mf_klaro_consent',
                translations: {
                    en: {
                        acceptAll: 'Accept all',
                        consentModal: {
                            description: 'Here you can see and customize the information that we collect about you.',
                        },
                        strictlyNecessary: {
                            title: 'Strictly Necessary Cookies',
                            description: 'Strictly Necessary Cookies.'
                        },
                        marketingCookies: {
                            title: 'Marketing Cookies',
                            description: 'Marketing Cookies.'
                        },
                        performanceCookies: {
                            title: 'Performance Cookies',
                            description: 'Performance Cookies.'
                        },
                        functionalCookies: {
                            title: 'Functional Cookies',
                            description: 'Functional Cookies.'
                        },
                        purposes: {
                            analytics: 'Analytics',
                            marketing: 'Marketing',
                            required: 'Strictly Necessary',
                            performance: 'Performance',
                            functional: 'Functionality'
                        },
                    },
                    sv: {
                        acceptAll: 'Acceptera alla',
                        consentNotice: {
                            changeDescription: "Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.",
                            description: "Genom att klicka acceptera samtycker du till lagring av cookies på din enhet för att förbättra användarupplevelsen på webbplatsen.\n",
                            learnMore: "Anpassa"
                        },
                        consentModal: {
                            title: "Information som vi samlar in",
                            description: "Här kan du se och anpassa vilken information vi samlar om dig.\n",
                            privacyPolicy: {
                                name: "cookie policy",
                                text: "För att veta mer, läs vår {privacyPolicy}.\n"
                            }
                        },
                        acceptSelected: 'Acceptera markerade',
                        strictlyNecessary: {
                            title: 'Strikt nödvändiga cookies',
                            description: 'Används för att kunna leverera våran tjänst. Dessa cookies sätts ofta som ett direkt svar på en åtgärd från din sida, t.ex. efter ett konto-skapande eller inloggning.'
                        },
                        marketingCookies: {
                            title: 'Marknadsföringscookies',
                            description: 'Används för riktad reklam; att visa innehåll- och annonser enligt vad vi tror kommer passa dig. Ifall du inte godkänner dessa cookies kommer du fortfarande att få annonser, men mindre anpassade efter dina intressen.'
                        },
                        performanceCookies: {
                            title: 'Prestandacookies',
                            description: 'Används för att analysera hur användare rör sig på vår webbplats, som i sin tur ligger till grund för saker såsom personalisering, rekommendationer, med mera. Om du inte godkänner dessa cookies kan vi inte skräddarsy din upplevelse.'
                        },
                        functionalCookies: {
                            title: 'Funktionella cookies',
                            description: 'Används för att förbättra funktioner på webbplatsen. Ifall du inte godkänner dessa cookies kan det hända att vissa funktioner inte fungerar eller beter sig annorlunda än förväntat.'
                        },
                        purposes: {
                            analytics: 'Analytics',
                            marketing: 'Marknadsföring',
                            required: 'Nödvändiga',
                            performance: 'Prestanda & anpassning',
                            functional: 'Funktionalitet'
                        },
                    }
                },
                apps: [
                    {
                        name: 'strictlyNecessary',
                        default: true,
                        title: 'Strikt nödvändiga cookies', // klaro config: don't include, else translations are ignored - EDIT: temporarily swedish, translations not working
                        purposes: ['required'],
                        required: true,
                    },
                    {
                        name: 'marketingCookies',
                        default: false,
                        title: 'Marknadsföringscookies', // klaro config: don't include, else translations are ignored - EDIT: temporarily swedish, translations not working
                        purposes: ['marketing'],
                        required: false,
                        optOut: true,
                        onlyOnce: false
                    },
                    {
                        name: 'performanceCookies',
                        default: false,
                        title: 'Prestandacookies', // klaro config: don't include, else translations are ignored - EDIT: temporarily swedish, translations not working
                        purposes: ['performance'],
                        required: false,
                        optOut: true,
                        onlyOnce: false
                    },
                    {
                        name: 'functionalCookies',
                        default: false,
                        title: 'Funktionella cookies', // klaro config: don't include, else translations are ignored - EDIT: temporarily swedish, translations not working
                        purposes: ['functional'],
                        required: false,
                        optOut: true,
                        onlyOnce: false
                    }
                ]
            }
        }
    ],
    templates: {
        WordpressPost: [
            {
                path: '/artiklar/:slug',
                component: './src/templates/Article.vue',
                refs: {
                    categories: {
                        typeName: 'WordpressCategory',
                    },
                    tags: {
                        typeName: 'WordpressPostTag',
                    }
                }
            }
        ],
        WordpressPostTag: [
            {
            path: '/artiklar/tag/:slug',
            component: './src/templates/Tag.vue',
            }
        ],
        WordpressCategory: 
        [
            {
            path: '/artiklar/kategori/:slug',
            component: './src/templates/Category.vue',
            }
        ],
        WordpressPage: [
            {
            path: '/:slug',  
            component: './src/templates/General.vue'
            }
        ],
        WordpressMedlemskap: [
            {
            path: '/medlemskap/:slug',  
            component: './src/templates/Membership.vue'
            }
        ],
        Coaches: [
            {
                path: '/vara-coacher/:slug',
                component: './src/templates/Coach.vue'
            }
        ] 
    },
    transformers: {
        remark: {
            // global remark options
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            }
        },
    },
    chainWebpack(config) {
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach(type => {
            addStyleResource(config.module.rule('scss').oneOf(type))
        })

    }
}
