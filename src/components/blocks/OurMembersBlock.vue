<template>
  <article class="our-members-block flex flex-col">
      <div class="our-members-block-inner lg:self-center lg:w-1300 md:w-full">
            <h1 class="section-title">{{ cont.ourMembersBlock.sectionTitle }}</h1>
            <h2 class="under-title hidden">{{ cont.ourMembersBlock.underTitle }}</h2> 

            <div class="our-members-carousel-wrap">
              <VueSlickCarousel v-bind="settings">
                <div class="our-members-carousel-slide flex flex-col lg:flex-row" v-for="quote in cont.ourMembersBlock.mamasQuotes" :key="quote.id">
                  <div class="our-members-left self-center">
                    <div class="our-members-photo">
                      <g-image :src="quote.img" class="our-members-img" :alt="quote.name" :title="quote.name"></g-image>
                    </div>
                  </div>
                  <div class="our-members-right flex flex-col self-center">
                    <div class="our-members-quote-icon"></div>
                    <h3 class="our-members-quote" v-html="quote.quote"></h3>
                    <h5 class="our-members-author" v-html="quote.name"></h5>

                    <g-link to="/vara-mamas/">
                      <h5 class="our-members-text-button text-button">{{ cont.ourMembersBlock.readFullStory }}<i class="fas fa-caret-right"></i></h5>
                    </g-link>

                  </div>
                </div>
              </VueSlickCarousel>
            </div>

            <g-link to="/vara-mamas/">
              <h5 class="our-members-text-button-big text-button">{{ cont.ourMembersBlock.readAllStories }}<i class="fas fa-caret-right"></i></h5>
            </g-link>
      </div>
  </article>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
      name: 'OurMembersBlock',
      components: {
        VueSlickCarousel,
      },
      data: function(){
        return {
          cont: this.$localeJSON,
          settings: {
            "dots": true,
            "speed": 500,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "initialSlide": 0,
            "infinite": false,
            "arrows" : true,
            "draggable" : true
          }
        }
    }
}
</script>

<style lang="scss">
@import '~/components/blocks/OurMembersBlock.scss';
</style>