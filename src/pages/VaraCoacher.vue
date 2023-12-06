<template>
  <Layout>
    <section class="content-inner inner flex flex-col self-center lg:w-1300 md:w-full">

      <article class="coaches-wrap flex flex-col">

        <h1 class="section-title">{{cont.pageCoaches.sectionTitle}}</h1>

        <div class="article-breadcrumbs"><g-link to="/"><i class="fas fa-home"></i></g-link> / {{cont.pageCoaches.breadcrumbsTitle}}</div>

        <h2 class="under-title my-5">{{cont.pageCoaches.trainersTitle}}</h2>

        <div class="coaches-grid grid sm:grid-cols-1 md:grid-cols-3 gap-7" >
          <div class="coaches-card flex" v-for=" { node } in $page.trainers.edges" :key="node.ID" v-bind:style="bgImage(node.imageURL)">
            <g-link :to="node.path" class="flex">
              <div class="card-ovly"></div>
              <div class="card-info self-end">
                <p class="card-info-name">{{ node.name }}</p>
                <p class="card-info-title">{{ node.title }}</p>
              </div>
            </g-link>
          </div>
        </div>

        <h2 class="under-title my-10">{{cont.pageCoaches.nutrisionistTitle}}</h2>

        <div class="coaches-grid grid sm:grid-cols-1 md:grid-cols-3 gap-7" >
          <div class="coaches-card flex" v-for=" { node } in $page.nutrionists.edges" :key="node.ID" v-bind:style="bgImage(node.imageURL)">
            <g-link :to="node.path" class="flex">
              <div class="card-ovly"></div>
              <div class="card-info self-end">
                <p class="card-info-name">{{ node.name }}</p>
                <p class="card-info-title">{{ node.title }}</p>
              </div>
            </g-link>
          </div>
        </div>

      </article>

    </section>
  </Layout>
</template>

<page-query>
query Coaches {
  trainers: allCoaches(sortBy: "name", order: ASC, filter: { coach_type: { eq: 1 }}) {
    edges {
      node {
        ID
        name
        title
        bio
        imageURL
        slug
        path
        coach_type
      }
    }
  },
  nutrionists: allCoaches(sortBy: "name", order: ASC, filter: { coach_type: { eq: 2 }}) {
    edges {
      node {
        ID
        name
        title
        bio
        imageURL
        slug
        path
        coach_type
      }
    }
  }
  coaches: allCoaches(sortBy: "name", order: ASC) {
    edges {
      node {
        ID
        name
        title
        bio
        imageURL
        slug
        path
        coach_type
      }
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
      title: this.cont.pageCoaches.metaTitle,
      meta: [
        { name: "description", content: this.cont.pageCoaches.metaDescription },
      ],
      link: [
        { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageCoaches.canonicalLink },
        { rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageCoaches.canonicalLink }
      ]
    }
  },
  data: function(){
    return {
        cont: this.$localeJSON
    }
  },
  methods: {
    bgImage: function(image){
        return 'background-image: url("' + image + '");background-size:cover;';
    }
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    let coaches = [];
    for (let i = 0; i < this.$page.coaches.edges.length; i++) {
        let c = this.$page.coaches.edges[i].node;

        coaches.push(c);
    }

    this.after_mount({
        coaches: coaches,
        page: { type: 'CoachListingPage', vpTitle:  this.cont.pageCoaches.metaTitle + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.cont.pageCoaches.canonicalLink }
    });
  }
}
</script>

<style lang="scss">
@import '~/pages/VaraCoacher.scss';
</style>