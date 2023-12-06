<template>
    <Layout>
        <div class="content-inner inner flex flex-col">

          <article class="category-wrap flex flex-col self-center lg:w-1300 md:w-full">

            <h1 class="section-title">{{cont.templateTag.sectionTitle}} <span class="bolded">{{ $page.wordpressPostTag.title }}</span></h1>

            <div class="article-breadcrumbs"><g-link to="/"><i class="fas fa-home"></i></g-link> / <g-link to="/artiklar/">{{ cont.templateTag.breadcrumbParenTitle}}</g-link> / {{ cont.templateTag.breadcrumbcurrentTitle}} / {{ $page.wordpressPostTag.title }}  </div>

            <div class="articles-cards-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-0 md:gap-x-10">
              <figure class="articles-card" v-for=" { node } of $page.wordpressPostTag.belongsTo.edges" :key="node.id" :post="node">
                <g-link :to="node.path">
                  <div class="articles-card-featured-img flex flex-col justify-end" v-bind:style="bgImage(node.featuredMedia.mediaDetails.sizes.medium !== null ? node.featuredMedia.mediaDetails.sizes.medium.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')" >
                  </div>
                  <div class="articles-card-content">
                    <div class="articles-card-info inline-flex justify-between">
                      <div class="articles-tags" v-for="( cat ) in node.categories.slice(0,1)" :key="cat.id">
                        <h5 class="articles-card-tag">{{ cat.title }}</h5>
                      </div>
                      <h5 class="articles-card-date">{{ formatDate(node.date) }}</h5>
                    </div>
                      <h4 class="articles-card-title" v-html="node.title"></h4>
                      <p class="read-more">{{cont.templateTag.readFullArticle}}<i class="fas fa-caret-right"></i></p>
                  </div>
                </g-link>
              </figure>
            </div>
            <div class="articles-pagination-wrap flex justify-center">
              <Pager class="pager-container" linkClass="pager-container-link" :info="$page.wordpressPostTag.belongsTo.pageInfo" :range="5"/>
            </div>

          </article>
        </div>
    </Layout>
</template>

<page-query>
query WordpressPostTag ($id: ID!, $page: Int) {
  wordpressPostTag(id: $id) {
    id
    title
    path
    slug
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordpressPost {
            id
            date
            slug
            title
            path
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
            tags {
              title
              path
              slug
            }
            categories {
              title
              path
              slug
            }
          }
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
      title: this.metaTitle !== '' && null ? this.metaTitle : this.cont.templateTag.metaTitle + this.$page.wordpressPostTag.title + '- MammaFitness' ,
      meta: [
        { name: "description", content: this.metaDesc !== '' && null ? this.metaDesc : this.cont.templateTag.metaDescription  },
      ]
    }
  },
  components: {
    Pager
  },
  data: function(){
    return {
        cont: this.$localeJSON,
        metaTitle: null,
        metaDesc: null
    }
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
  mounted(){
      document.querySelector('.layout').classList.add('sub-page');

      //Fetch specific tag from WP REST API to get meta title and meta desc
      fetch('https://api-wordpress-dot-mammafitness.appspot.com/wp-json/wp/v2/tags/' + this.$page.wordpressPostTag.id)
        .then(response => response.json())
        .then(data => {
            this.metaTitle = data.acf.metatitle;
            this.metaDesc = data.acf.metadesc;
        });

      this.canonicalGen();

      let tag = {
          title: this.$page.wordpressPostTag.title,
          pageInfo: {
              currentPage: this.$page.wordpressPostTag.belongsTo.pageInfo.currentPage,
              totalPages: this.$page.wordpressPostTag.belongsTo.pageInfo.totalPages,
          },
          items: [],
      };

      for (let i = 0; i < this.$page.wordpressPostTag.belongsTo.edges.length; i++) {
          let node = this.$page.wordpressPostTag.belongsTo.edges[i].node;

          let item = {};
          item.title = node.title;
          item.id = node.id;
          item.date = node.date;

          item.featuredMedia = {};
          for (let key in node.featuredMedia) {
              item.featuredMedia[key] = node.featuredMedia[key];
          }

          item.categories = [];
          for (let j = 0; j < node.categories.length; j++) {
              item.categories.push(node.categories[j].title);
          }

          item.tags = [];
          for (let j = 0; j < node.tags.length; j++) {
              item.tags.push(node.tags[j].title);
          }

          tag.items.push(item);
      }

      this.after_mount({
          page: { type: 'TagPage', vpTitle: this.cont.templateTag.metaTitle + this.$page.wordpressPostTag.title + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.$page.wordpressPostTag.path },
          tag: tag
      });
  },
}
</script>
<style lang="scss">
@import '~/templates/Tag.scss';
</style>
