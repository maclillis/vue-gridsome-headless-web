<template>
  <Layout>
    <section class="content-inner inner flex flex-col">

      <article class="general-wrap flex flex-col self-center justify-center lg:w-1300 md:w-full">

        <h1 class="section-title" v-html="$page.general.title"></h1>

        <div class="general-content" v-html="$page.general.content"></div>
      
      </article>

    </section>
  </Layout>
</template>

<page-query>
query Page ($id: ID!) {
    general: wordpressPage (id: $id) {
      title
      id
      content
      author {
        name
      }
      featuredMedia {
        sourceUrl
      }
      slug
      date
      type
      parent
      excerpt
      status
      link
      path
      acf {
        metaTitle
        metaDesc
      }
    },
    metadata {
      siteUrl
      pathPrefix
    }
}
</page-query>

<script>

import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
    mixins: [MammaFitnessGDPR],
    metaInfo() {
        return {
            title: this.$page.general.acf.metaTitle !== '' ? this.HTMLDecode(this.$page.general.acf.metaTitle) : this.$page.general.title + ' - MammaFitness',
            meta: [
                { name: "description", content: this.$page.general.acf.metaDesc !== '' ? this.HTMLDecode(this.$page.general.acf.metaDesc) : this.stripTags(this.$page.general.excerpt) }
            ],
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.general.path }
                //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.general.path }
            ]
        }
    },
    methods: {
      bgImage: function(image){
          return 'background-image: url("' + image + '");background-size:cover;';
      },
      stripTags: function(org) {
          return org.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, ' ').replace(/\n/g, '').replace(/&#8230;/g, '');
      },
      strngy: function (str) {	
          return JSON.stringify(str);
      }
    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.after_mount({
            page: { type: 'GeneralPage', vpTitle: this.$page.general.title + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.$page.general.path }
        });
    }
}
</script>

<style lang="scss">
@import '~/templates/General.scss';
</style>