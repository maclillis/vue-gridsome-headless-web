<template>
  <article class="featured-products-wrap flex flex-col">

    <div class="featured-products-inner lg:self-center lg:w-1300">

    <hr class="horizontal-line hidden" />

      <h1 class="section-title">{{ cont.featuredProductsBlock.sectionTitle }}</h1>

        <div class="feat-products-carousel-wrap hidden md:block">
          <VueSlickCarousel v-bind="settings" >
            <div class="product-slide-card flex flex-col" v-for="product in cont.featuredProductsBlock.products" :key="product.id">
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
            <div class="product-slide-card flex flex-col" v-for="product in cont.featuredProductsBlock.products" :key="product.id">
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

      <a href="https://shop.mammafitness.se">
        <h5 class="text-button added-padding">{{cont.featuredProductsBlock.allProductsLink}}<i class="fas fa-caret-right"></i></h5>
      </a>
        
    </div>

  </article>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'FeaturedProductsBlock',
  components: {
    VueSlickCarousel
  },
  data: function() {
      return{
        cont: this.$localeJSON,
        // Settings for the Carousel
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
    methods: {
      bgImage: function(image){
        return 'background-image: url("' + image + '");background-size:cover;';
      }
  }
}
</script>

<style lang="scss">
@import '~/components/blocks/FeaturedProductsBlock.scss';
</style>