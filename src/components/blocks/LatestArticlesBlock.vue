<template>
  <article class="latest-articles-block-wrap flex flex-col">

    <div class="latest-articles-block-inner self-center lg:w-1300 md:w-full" >

      <h1 class="section-title">{{ cont.latestArticlesBlock.sectionTitle }}</h1>

      <div class="articles-cards-wrap grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-3 md:gap-10">
          <figure class="articles-card" v-for=" { node } in $static.allWordpressPost.edges" :key="node.id">
            <g-link :to="node.path">
              <div class="articles-card-featured-img flex flex-col justify-end" v-bind:style="bgImage(node.featuredMedia.mediaDetails.sizes.large !== null ? node.featuredMedia.mediaDetails.sizes.large.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')">
              </div>
              <div class="articles-card-content flex flex-col justify-between">
                <div class="articles-card-info inline-flex justify-between">
                  <div class="articles-categories" v-for="( category ) in node.categories.slice(0,1)" :key="category.id">
                      <h5 class="articles-card-category">{{ category.title }}</h5>
                  </div>
                  <h5 class="articles-card-date">{{ formatDate(node.date) }}</h5>
                </div>
                  <h4 class="articles-card-title" v-html="node.title"></h4>
                  <p class="read-more">{{ cont.latestArticlesBlock.readArticleButton }}<i class="fas fa-caret-right"></i></p>
              </div>
            </g-link>
          </figure>
      </div>

      <g-link to="/artiklar/">
          <h5 class="text-button">{{ cont.latestArticlesBlock.readAllButton }}<i class="fas fa-caret-right"></i></h5>
      </g-link>
        
    </div>

  </article>
</template>

<static-query>
query ($static: Int) {
  allWordpressPost(sortBy: "date", limit: 6, page: $static) {
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
        tags {
          title
        }
      }
    }
  }
}
</static-query>

<script>
import {gsap} from 'gsap';
import moment from 'moment';
export default {
  name: 'LatestArticlesBlock',
    data: function() {
    return{
        cont: this.$localeJSON
    }
  },
  methods: {
      bgImage: function(image){
        return 'background-image: url("' + image + '");background-size:cover;';
      },
      formatDate: function(value){
        return moment(String(value)).locale(this.$localeJSON.html.lang).format('LL')
      },
      inView: function(e){
        if (e.percentTop <= 0.9){
          gsap.to(['.articles-card'], {opacity: 1, y:0, stagger:0.2, duration:0.6});
        }
      }
  }
}
</script>

<style lang="scss">
@import '~/components/blocks/LatestArticlesBlock.scss';
</style>