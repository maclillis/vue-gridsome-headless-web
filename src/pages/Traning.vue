<template>
  <Layout>
    <section class="content-inner inner flex flex-col self-center lg:w-1300 md:w-full">

      <article class="exercise-wrap">

        <h1 class="section-title">{{cont.pageExercise.sectionTitle}}</h1>

        <p class="lead hidden">{{cont.pageExercise.subSectionTitle }}</p>

        <h2 class="sub-section-title">{{cont.pageExercise.articlesTitle}}</h2>
             <div class="filter-wrap flex flex-row justify-between">
              <div class="filter-search flex">
                  <input type="text" class="form--text search-form" :placeholder="cont.pageExercise.searchPlaceholder" id="search" v-model="search" />
              </div>
            </div>

            <div class="search-results-wrap" v-if="filterArticles.length > 0">

              <div class="current-search" v-if="search"><h4>{{cont.pageExercise.searchResults}} <span class="bolded">{{ this.search }}</span></h4></div>

              <div class="articles-cards-wrap grid grid-cols-1 mb-40 md:grid-cols-2 lg:grid-cols-4 gap-y-0 gap-x-0 md:gap-x-10 search-query" v-if="search">
                  <figure class="articles-card" v-for="{ node } in filterArticles" :key="node.id" >
                    <g-link :to="node.path">
                      <div class="articles-card-featured-img flex flex-col justify-end" v-bind:style="bgImage(node.featuredMedia.mediaDetails.sizes.medium !== null ? node.featuredMedia.mediaDetails.sizes.medium.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')" >
                      </div>
                      <div class="articles-card-content">
                        <div class="articles-card-info inline-flex justify-between">
                          <div class="articles-categories" v-for="( cat ) in node.categories.slice(0,1)" :key="cat.id">
                              <h5 class="articles-card-category">{{ cat.title }}</h5>
                          </div>
                          <h5 class="articles-card-date">{{ formatDate(node.date) }}</h5>
                        </div>
                          <h4 class="articles-card-title" v-html="node.title"></h4>
                          <p class="read-more">{{cont.pageExercise.readFullArticle}}<i class="fas fa-caret-right"></i></p>
                      </div>
                    </g-link>
                  </figure>
              </div>
            </div>

            <div class="no-results-wrap" v-else>
              <h4 class="no-results" v-html="cont.pageExercise.noResults"></h4>
            </div>

            <div class="articles-cards-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-0 md:gap-x-10" v-if="search.length === 0">
              <figure class="articles-card" v-for=" { node } of $page.exerciseArticles.edges" :key="node.id" :post="node.title">
                <g-link :to="node.path">
                  <div class="articles-card-featured-img flex flex-col justify-end" v-bind:style="bgImage(node.featuredMedia.mediaDetails.sizes.mediumLarge !== null ? node.featuredMedia.mediaDetails.sizes.mediumLarge.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')" >
                  </div>
                  <div class="articles-card-content">
                    <div class="articles-card-info inline-flex justify-between">
                      <div class="articles-categories" v-for="( cat ) in node.categories.slice(0,1)" :key="cat.id">
                          <h5 class="articles-card-category">{{ cat.title }}</h5>
                      </div>
                      <h5 class="articles-card-date">{{ formatDate(node.date) }}</h5>
                    </div>
                      <h4 class="articles-card-title" v-html="node.title"></h4>
                      <p class="read-more">{{cont.pageExercise.readFullArticle}}<i class="fas fa-caret-right"></i></p>
                  </div>
                </g-link>
              </figure>
            </div>

            <div class="articles-pagination-wrap flex justify-center" v-if="search.length === 0">
              <Pager class="pager-container" linkClass="pager-container-link" :info="$page.exerciseArticles.pageInfo" />
            </div>

      <h2 class="sub-section-title py-10">{{cont.pageExercise.shopTitle}}</h2>

        <div class="feat-products-carousel-wrap hidden md:block">
          <VueSlickCarousel v-bind="settings" >
            <div class="product-slide-card flex flex-col" v-for="product in cont.pageExercise.exerciseProducts" :key="product.id">
              <a :href="product.link">
                <div class="product-img">
                  <g-image :src="product.img" :alt="product.title" :title="product.title" />
                </div>
                <div class="product-info">
                  <p class="product-title" v-html="product.title"></p>
                  <p class="product-price" v-html="product.price"></p>
                </div>
              </a>
            </div>
          </VueSlickCarousel>
        </div>

        <div class="feat-products-carousel-wrap md:hidden">
          <VueSlickCarousel v-bind="mobileSettings" >
            <div class="product-slide-card flex flex-col" v-for="product in cont.pageExercise.exerciseProducts" :key="product.id">
              <a :href="product.link">
                <div class="product-img">
                  <g-image :src="product.img" :alt="product.title" :title="product.title" />
                </div>
                <div class="product-info">
                  <p class="product-title" v-html="product.title"></p>
                  <p class="product-price" v-html="product.price"></p>
                </div>
              </a>
            </div>
          </VueSlickCarousel>
        </div>

        <h2 class="sub-section-title py-10">{{cont.pageExercise.trainersTitle}}</h2>

        <div class="trainers-grid grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div class="coaches-card flex" v-for=" { node } in $page.trainers.edges" :key="node.ID" v-bind:style="bgImage(node.imageURL)">
            <g-link :to="node.path" class="flex w-full">
              <div class="card-ovly"></div>
              <div class="card-info self-end">
                <p class="card-info-name md:pb-2">{{ node.name }}</p>
                <p class="card-info-title md:hidden">{{ node.title }}</p>
              </div>
            </g-link>
          </div>
        </div>
      
      </article>

    </section>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  exerciseArticles: allWordpressPost(perPage: 6, sortBy: "date", order:DESC, page: $page, filter: { categories: { id: {in: ["587"]} }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        path
        date
        link
        excerpt
        featuredMedia {
          mediaType
          sourceUrl
          mediaDetails {
          sizes {
              thumbnail {
                  sourceUrl
              }
              medium {
                  sourceUrl
              }
              mediumLarge {
                  sourceUrl
              }
              large {
                  sourceUrl
              }
          }
        }
        }
        author {
            name
        }
        categories {
            title
        }
      }
    }
  },
  computedQuery: allWordpressPost(filter: { categories: { id: {in: ["587"]} }}) {
    edges {
      node {
        id
        title
        content
        path
        date
        link
        excerpt
        featuredMedia {
          mediaType
          sourceUrl
          mediaDetails {
          sizes {
              thumbnail {
                  sourceUrl
              }
              medium {
                  sourceUrl
              }
              mediumLarge {
                  sourceUrl
              }
              large {
                  sourceUrl
              }
          }
        }
        }
        author {
            name
        }
        categories {
            title
        }
      }
    }
  },
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
  metadata {
      siteUrl
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import moment from 'moment';
import VueSlickCarousel from 'vue-slick-carousel'
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
    return {
      title: this.cont.pageExercise.metaTitle + ' - MammaFitness',
      meta: [
        { name: "description", content: this.cont.pageExercise.metaDescription }
      ],
      link: [
        //{ rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageExercise.canonicalLink},
        //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageExercise.canonicalLink }
      ],
      canonicalGen: function(){
          // Create a cannonical link dynamicallly so that the paginations also get's unique urls.
        var link = !!document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', location.protocol + '//' + location.host + location.pathname);
        document.head.appendChild(link);
      }
    }
  },
    data: function() {
      return{
        cont: this.$localeJSON,
        search: '',
        filterCats: '',
        // Settings for the Products Carousel
        settings: {
          "dots": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 4,
          "initialSlide": 0,
          "infinite": false,
          "arrows" : true,
        },
        mobileSettings: {
          "dots": true,
          "speed": 500,
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "initialSlide": 0,
          "infinite": false,
          "arrows" : false,
        }
      }
  },
  components: {
    VueSlickCarousel,
    Pager
  },
  methods: {
    bgImage: function(image){
      return 'background-image: url("' + image + '");background-size:cover;';
    },
    formatDate: function(value){
      return moment(String(value)).locale(this.$localeJSON.html.lang).format('LL')
    },
    canonicalGen: function(){
      // Create a cannonical link dynamicallly so that the paginations also get's unique urls.
      var link = !!document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', location.protocol + '//' + location.host + location.pathname);
      document.head.appendChild(link);
    }
  },
  updated: function(){
    this.canonicalGen();

    document.querySelector('.layout').classList.add('sub-page');
  },
  computed: {
    filterArticles: function(){
      return this.$page.computedQuery.edges.filter(searches => {
        return searches.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
      })
    },
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    this.canonicalGen();

    this.after_mount({
        page: { type: 'TrainingThemePage', vpTitle: this.cont.pageExercise.metaTitle + ' - MammaFitness', vpUrl: location.pathname }
    });
  },
}
</script>

<style lang="scss">
@import '~/pages/Traning.scss';
</style>