<template>
  <Layout>
    <section class="content-inner inner flex flex-col flex-col self-center lg:w-1300 md:w-full">

      <article class="notfound-wrap">
        <h1 class="section-title">{{ cont.page404.sectionTitle }}</h1>

        <p>{{ cont.page404.content }}</p>

        <g-link to="/" class="flex back-page">
          <i class="fas fa-caret-left self-center"></i><h5>{{ cont.page404.backPage }}</h5>
        </g-link>
      </article>

    </section>
  </Layout>
</template>

<script>
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
  mixins: [MammaFitnessGDPR],
  data: function(){
    return {
        cont: this.$localeJSON
    }
  },
  metaInfo() {
    return {
      title: this.cont.page404.metaTitle + ' - MammaFitness'
    }
  },
  mounted(){
      document.querySelector('.layout').classList.add('sub-page');

      this.after_mount({
          page: { type: 'ErrorPage', vpTitle: this.cont.page404.metaTitle +' - MammaFitness', vpUrl: location.pathname }
      });
  },
}
</script>

<style lang="scss">
@import '~/pages/404.scss';
</style>