const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--coach-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/Coach.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--traning-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Traning.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--motivation-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Motivation.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--kost-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Kost.vue")
const c7 = () => import(/* webpackChunkName: "page--src--templates--membership-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/Membership.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--artiklar-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Artiklar.vue")
const c9 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/Article.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--vara-coacher-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/VaraCoacher.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--vara-mamas-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/VaraMamas.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--sa-funkar-det-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/SaFunkarDet.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--min-profil-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/MinProfil.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--logga-in-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/LoggaIn.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--medlemskap-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Medlemskap.vue")
const c16 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/404.vue")
const c17 = () => import(/* webpackChunkName: "page--src--templates--general-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/templates/General.vue")
const c18 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/marcusliljehammar/Desktop/repos/mammafitness-site/se/src/pages/Index.vue")

export default [
  {
    path: "/artiklar/tag/:slug/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/artiklar/kategori/:slug/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/vara-coacher/:slug/",
    component: c3
  },
  {
    path: "/traning/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/motivation/:page(\\d+)?/",
    component: c5
  },
  {
    path: "/kost/:page(\\d+)?/",
    component: c6
  },
  {
    path: "/medlemskap/:slug/",
    component: c7
  },
  {
    path: "/artiklar/:page(\\d+)?/",
    component: c8
  },
  {
    path: "/artiklar/:slug/",
    component: c9
  },
  {
    path: "/vara-coacher/",
    component: c10
  },
  {
    path: "/vara-mamas/",
    component: c11
  },
  {
    path: "/sa-funkar-det/",
    component: c12
  },
  {
    path: "/min-profil/",
    component: c13
  },
  {
    path: "/logga-in/",
    component: c14
  },
  {
    path: "/medlemskap/",
    component: c15
  },
  {
    name: "404",
    path: "/404/",
    component: c16
  },
  {
    path: "/:slug/",
    component: c17
  },
  {
    name: "home",
    path: "/",
    component: c18
  },
  {
    name: "*",
    path: "*",
    component: c16
  }
]
