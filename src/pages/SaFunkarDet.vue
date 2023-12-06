<template>
  <Layout>
  <div class="sa-funkar-hero flex justify-start lg:justify-center">
    <div class="funkar-hero-inner self-center lg:w-1300 w-full flex justify-center">
      <h1 class="section-title">{{cont.pageHowItWorks.sectionTitle}}</h1>
    </div>
  </div>
  <section class="content-inner inner flex flex-col self-center">

    <article class="sa-funkar-wrap flex flex-col justify-center">

      <div class="concept-cards-wrap grid sm:grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-8 lg:w-1300 md:w-full self-center">
        <div class="concept-card" v-for="card in cont.pageHowItWorks.uspCards" :key="card.id">
          <div class="concept-card-icon" v-bind:style="bgImage(card.icon)"></div>
          <h4 class="concept-heading">{{ card.heading }}</h4>
          <p class="concept-p">{{ card.description }}</p>
        </div>
      </div>

      <AppPromotionBlock />

      <MembershipsBlock />

      <MembershipExplanationBlock />

      <ComparisonTableBlock class="hidden md:flex" >
        <img src="https://storage.googleapis.com/mammafitness/public/web/images/comptable_general.svg" class="comparison-table-svg" alt="Comparison Table" title="Comparison Table" />
      </ComparisonTableBlock>

      <FaqBlock />
    
    </article>

  </section>
  </Layout>
</template>
<page-query>
  query {
    metadata {
      siteUrl
      pathPrefix
    }
  }
</page-query>

<script>
import {gsap} from 'gsap';
import FaqBlock from '~/components/blocks/FaqBlock.vue';
import MembershipsBlock from '~/components/blocks/MembershipsBlock.vue';
import ComparisonTableBlock from '~/components/blocks/ComparisonTableBlock.vue'
import AppPromotionBlock from '~/components/blocks/AppPromotionBlock.vue'
import MembershipExplanationBlock from '~/components/blocks/MembershipExplanationBlock.vue'
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
    return {
      title: this.cont.pageHowItWorks.metaTitle,
      meta: [
        { name: "description", content: this.cont.pageHowItWorks.metaDescription },
      ],
      link: [
        { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageHowItWorks.canonicalLink },
      ]
    }
  },
  components: {
    AppPromotionBlock,
    FaqBlock,
    MembershipsBlock,
    ComparisonTableBlock,
    MembershipExplanationBlock
  },
  data: function(){
    return {
      cont: this.$localeJSON,
    }
  },
  methods: {
    inView: function(e){
      if (e.type === 'enter'){
        gsap.from('.concept-card', {opacity: 0, scale:0, stagger:0.2, duration:0.6});
      }
    },
    bgImage: function(image){
      return 'background-image: url("' + image + '");background-size:cover;';
    }
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    this.after_mount({
        page: { type: 'HowItWorksPage', vpTitle: this.cont.pageHowItWorks.metaTitle + ' - MammaFitness', vpUrl: location.pathname }
    });
  },
}
</script>

<style lang="scss">
@import '~/pages/SaFunkarDet.scss';
</style>