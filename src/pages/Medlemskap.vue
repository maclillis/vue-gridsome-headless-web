<template>
  <Layout>
    <section class="content-inner inner flex flex-col lg:w-1300 md:w-full">

      <article class="membership-node-wrap">

        <h1 class="section-title">{{cont.pageMemberships.sectionTitle}}</h1>

        <MembershipsBlock />        
      
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
import MembershipsBlock from '~/components/blocks/MembershipsBlock.vue';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';
import MembershipWizard from '~/components/blocks/MembershipWizard.vue';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
    return {
      title: this.cont.pageMemberships.metaTitle + ' - MammaFitness',
      meta: [
        { name: "description", content: this.cont.pageMemberships.metaDescription }
      ],
      link: [
        { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageMemberships.cannoicalLink },
      ]
    }
  },
  components: {
      MembershipsBlock,
      MembershipWizard
  },
  data: function(){
    return {
        cont: this.$localeJSON,
    }
  },
  updated: function(){
    document.querySelector('.layout').classList.add('sub-page');
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    this.after_mount({
        page: { type: 'MembershipListingPage', vpTitle: this.cont.pageMemberships.metaTitle +' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.cont.pageMemberships.canonicalLink }
    });
  },
}
</script>

<style lang="scss">
@import '~/pages/Medlemskap.scss';
</style>