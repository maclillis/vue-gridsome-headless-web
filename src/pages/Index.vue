<template>
  <Layout>

  <!--<ValentinesDayBlock /> Campaign component for Valentine´s Day 2022 <3 -->

  <HeroBlock />

    <section class="content-inner inner flex flex-col">

      <CampaignPromotionBlock />

      <LatestArticlesBlock />

      <MembershipsBlock />

      <AppPromotionBlock />

      <OurMembersBlock />

      <FeaturedProductsBlock />

      <NewsletterBlock />

    </section>
  </Layout>
</template>
<page-query>
  query {
      metadata {
      siteName
      siteUrl
      pathPrefix
    }
  }
</page-query>
<script>
import LatestArticlesBlock from '~/components/blocks/LatestArticlesBlock.vue';
import HeroBlock from '~/components/blocks/HeroBlock.vue';
import FaqBlock from '~/components/blocks/FaqBlock.vue';
import OurMembersBlock from '~/components/blocks/OurMembersBlock.vue';
import NewsletterBlock from '~/components/blocks/NewsletterBlock.vue';
import FeaturedProductsBlock from '~/components/blocks/FeaturedProductsBlock.vue';
import MembershipsBlock from '~/components/blocks/MembershipsBlock.vue';
import AppPromotionBlock from '~/components/blocks/AppPromotionBlock.vue';
import CampaignPromotionBlock from '~/components/blocks/CampaignPromotionBlock.vue';
import ValentinesDayBlock from '~/components/blocks/campaigns/ValentinesDayBlock.vue';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
    return {
      title: this.cont.pageIndex.metaTitle,
      meta: [
          { name: "description", content: 'Vi erbjuder personligt stöd på vägen mot en hälsosam livsstil, specifikt utformat för dig som mamma och kvinna. Träning, kost och mindset, levererat digitalt för att passa in i din varddag. Allt hänger ihop.' },
          { property: "og:url", content: 'https://www.mammafitness.se/se/' },
          { property: "og:type", content: 'website' },
          { property: "og:title", content: 'MammaFitness - Vanliga mammor, ovanliga resultat' },
          { property: "og:description", content: 'Vi erbjuder personligt stöd på vägen mot en hälsosam livsstil, specifikt utformat för dig som mamma och kvinna. Träning, kost och mindset, levererat digitalt för att passa in i din varddag. Allt hänger ihop.MammaFitness koncept ger dig professionell coaching, individuellt anpassad träning och balanserad kost - tillsammans når vi dina mål.' },
          { property: "og:image", content: 'https://storage.googleapis.com/mammafitness/public/web/images/mammafit-og-image.jpg' },
          { name: "google-site-verification", content: "uyaaJD7fGbZhK5MO2hyKBhKYr4vFiAniMe_AI68127M"}
      ],
      link: [
        { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + '/' },
        //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.cont.google.referTopUrl }
      ],
      script: [
        { innerHTML: '{ "@context": "http://schema.org", "@type" : "Organization", "legalName": "MammaFitness" , "slogan": "Vanliga mammor, ovanliga resultat" , "logo": "https://storage.googleapis.com/mammafitness/public/web/images/mafitness_logo.png", "url": "https://www.mammafitness.se/", "address": "Tulegatan 19, 113 53, Stockholm, Sweden", "email": "info@mammafitness.se", "telephone": "+46 (0)8 233 440"}', type: 'application/ld+json' }
      ]
    }
  },
  components : {
      HeroBlock,
      FaqBlock,
      LatestArticlesBlock,
      NewsletterBlock,
      FeaturedProductsBlock,
      MembershipsBlock,
      AppPromotionBlock,
      CampaignPromotionBlock,
      OurMembersBlock,
      ValentinesDayBlock
  },
    data: function(){
    return {
      cont: this.$localeJSON,
    }
  },
    methods: {
        onScroll () {
            let navBg = document.querySelector('header');
            let deskMenu = document.querySelectorAll('.nav-link');
            let mfLogoW = document.querySelector('.mf-logo-svg-w');
            let mfLogoB = document.querySelector('.mf-logo-svg-b');
            let mfDeskLogoW = document.querySelector('.mf-deskt-logo-svg-w');
            let mfDeskLogoB = document.querySelector('.mf-deskt-logo-svg-b');
            let searchIconW = document.querySelector('.search-w');
            let searchIconB = document.querySelector('.search-b');
            let hamSld = document.querySelector('.hamburger--slider');
            if (window.scrollY >= 50){
                navBg.classList.add('header-bg');
                hamSld.classList.add('ham-white');
                mfLogoW.style.display = "none";
                mfLogoB.style.display = "flex";
                mfDeskLogoW.style.display = "none";
                mfDeskLogoB.style.display = "flex";
                searchIconW.style.display = "none";
                searchIconB.style.display = "flex";
                for(var i = 0; i < deskMenu.length; i++) {
                  deskMenu[i].classList.add('desktop-menu-black');
                }
            } else if (window.scrollY <= 50) {
                navBg.classList.remove('header-bg')
                hamSld.classList.remove('ham-white');
                mfLogoW.style.display = "flex";
                mfLogoB.style.display = "none";
                mfDeskLogoW.style.display = "flex";
                mfDeskLogoB.style.display = "none";
                searchIconW.style.display = "flex";
                searchIconB.style.display = "none";
                for(var i = 0; i < deskMenu.length; i++) {
                  deskMenu[i].classList.remove('desktop-menu-black');
                }
            }
        }
    },
    beforeMount () {
      window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    mounted() {

        this.after_mount({
            page: { type: 'StartPage', vpTitle: this.cont.pageIndex.metaTitle, vpUrl: location.pathname }
        });
    }
}
</script>
<style lang="scss">
@import '~/pages/Index.scss';
</style>
