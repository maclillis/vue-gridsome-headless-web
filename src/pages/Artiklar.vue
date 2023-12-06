<template>
    <Layout>
        <div class="content-inner inner flex flex-col">

          <article class="articles-wrap flex flex-col self-center lg:w-1300 md:w-full">

            <a id="search"></a>

            <h1 class="section-title">{{cont.pageAllArticles.sectionTitle}}</h1>

            <div class="article-breadcrumbs"><g-link to="/"><i class="fas fa-home"></i></g-link> / {{cont.pageAllArticles.breadcrumbsTitle}}</div>

            <div class="filter-wrap flex flex-row justify-between">
              <div class="filter-search flex">
                  <input type="text" class="form--text search-form" :placeholder="cont.pageAllArticles.searchPlaceholder" id="search" v-model="search" />
              </div>
            </div>

            <div class="search-results-wrap" v-if="computedArticles.length > 0">

              <div class="current-search" v-if="search"><h4>{{cont.pageAllArticles.searchResults}} <span class="bolded">{{ this.search }}</span></h4></div>

              <div class="articles-cards-wrap grid grid-cols-1 mb-40 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-0 md:gap-x-10 search-query" v-if="search">
                  <figure class="articles-card" v-for="{ node } in computedArticles" :key="node.id" >
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
                          <p class="read-more">{{cont.pageAllArticles.readFullArticle}}<i class="fas fa-caret-right"></i></p>
                      </div>
                    </g-link>
                  </figure>
              </div>
            </div>

            <div class="no-results-wrap" v-else>
              <h4 class="no-results" v-html="cont.pageAllArticles.searchNoResults"></h4>
            </div>

            <div class="articles-cards-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-0 md:gap-x-10" v-if="search.length === 0">
              <figure class="articles-card" v-for=" { node } of $page.articles.edges" :key="node.id" :post="node.title">
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
                      <p class="read-more">{{cont.pageAllArticles.readFullArticle}}<i class="fas fa-caret-right"></i></p>
                  </div>
                </g-link>
              </figure>
            </div>

            <div class="articles-pagination-wrap flex justify-center" v-if="search.length === 0">
              <Pager class="pager-container" linkClass="pager-container-link" :info="$page.articles.pageInfo" />
            </div>
          </article>
        </div>
    </Layout>
</template>

<page-query>
query ($page: Int) {
  articles: allWordpressPost(sortBy: "date", perPage: 12, page: $page) @paginate {
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
            id
            title
        }
        tags {
          id
          title
        }
      }
    }
  },
  computedQuery: allWordpressPost {
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
            id
            title
        }
        tags {
          id
          title
        }
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
import { Pager } from 'gridsome';
import moment from 'moment';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
    return {
      title: this.cont.pageAllArticles.metaTitle + ' - MammaFitness',
      meta: [
          { name: "description", content: this.cont.pageAllArticles.metaDescription }
      ],    
      link: [
        //{ rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageAllArticles.canonicalLink }
        //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageAllArticles.cannoicalLink }
      ]
    }
  },
  data : function(){
    return {
      search: '',
      selectedCat: 'Alla',
      cont: this.$localeJSON
    }
  },
  components: {
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
  computed: {
    computedArticles: function(){
      return this.$page.computedQuery.edges.filter(searches => {
        return searches.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
      })
    }
  },
  updated: function(){
    this.canonicalGen();

    document.querySelector('.layout').classList.add('sub-page');
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    this.canonicalGen();

    this.after_mount({
        page: { type: 'ArticleListingPage', vpTitle: this.cont.pageAllArticles.metaTitle + ' - MammaFitness', vpUrl: location.pathname }
    });
  },
}
</script>
<style lang="scss">
@import '~/pages/Artiklar.scss';
</style>
