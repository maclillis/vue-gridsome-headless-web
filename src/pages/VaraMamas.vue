<template>
    <Layout>
        <div class="vara-mamas-hero flex justify-center lg:justify-start lg:justify-center">
            <div class="mamas-hero-inner self-center lg:w-1300 md:w-full flex flex-col justify-center">
                <h1 class="section-title flex self-center">{{cont.pageMamas.sectionTitle}}</h1>
            </div>
        </div>
        <section class="content-inner inner flex flex-col self-center lg:w-1300 md:w-full self-center">

            <article class="vara-mamas-wrap flex flex-col justify-center">

            <div class="quotes-cards-wrap hidden md:block">
                <VueSlickCarousel v-bind="settings">
                    <div class="quotes-card justify-center" v-for="card in cont.pageMamas.mamasCards" :key="card.id">
                        <p class="quotes-p self-center" v-html="card.quote"></p>
                    </div>
                </VueSlickCarousel>
            </div>

            <div class="quotes-cards-wrap block md:hidden h-190 md:h-auto">
                <VueSlickCarousel v-bind="mobileSettings">
                    <div class="quotes-card justify-center" v-for="card in cont.pageMamas.mamasCards" :key="card.id">
                        <p class="quotes-p self-center" v-html="card.quote"></p>
                    </div>
                </VueSlickCarousel>
            </div>

            <div class="vara-mamas-teaser-wrap flex justify-center">
                <h3 class="teaser-title" v-html="cont.pageMamas.teaserText"></h3>
            </div>

            <TestimonialsCardsWidget />

            <h1 class="section-title under-title">{{cont.pageMamas.underTitle}}</h1>

            <div class="quotes-cloud-wrap flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-x-10">
                <div class="quotes-cloud-bubble flex justify-center" v-for="bubble in cont.pageMamas.mamasBubbles" :key="bubble.id">
                    <div class="quotes-cloud-inner self-center">
                        <p class="" v-html="bubble.quote"></p>
                    </div>
                </div>
            </div>

            <div class="vara-mamas-closer-wrap flex flex-col justify-center">
                <h3 class="teaser-title text-center self-center" v-html="cont.pageMamas.signoffText"></h3>
                <div class="buttons-wrap flex justify-center flex-col lg:flex-row">
                    <a href="/se/medlemskap/">
                        <button class="btn btn--secondary mb-3 mr-6">{{cont.pageMamas.membershipButton}}</button>
                    </a>
                    <a href="https://shop.mammafitness.se/medlemskap">
                        <button class="btn btn--primary mb-3">{{cont.pageMamas.memberButton}}</button>
                    </a>
                </div>
            </div>
            
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
import VueSlickCarousel from 'vue-slick-carousel';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

import TestimonialsCardsWidget from '~/components/widgets/TestimonialsCardsWidget.vue';
export default {
    mixins: [MammaFitnessGDPR],
    metaInfo() {
        return {
            title: this.cont.pageMamas.metaTitle,
            meta: [
                { name: "description", content: this.cont.pageMamas.metaDescription },
            ],
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageMamas.canonicalLink },
                { rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageMamas.canonicalLink }
            ]
        }
    },
    components: {
        VueSlickCarousel,
        TestimonialsCardsWidget
    },
    data: function() {
        return{
            cont: this.$localeJSON,
            // Settings for the Products Carousel
            settings: {
            "dots": false,
            "speed": 500,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "initialSlide": 0,
            "infinite": false,
            "arrows" : false,
            "draggable" : false,
            "variableWidth": true
            },
            mobileSettings: {
            "dots": true,
            "speed": 500,
            "autoplay" : true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "initialSlide": 0,
            "infinite": true,
            "arrows" : false,
            "variableWidth": true,
            "draggable" : true,
            "pauseOnHover" : true
            }
        }
    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.after_mount({
            page: { type: 'TestimonialsListingPage', vpTitle: this.cont.pageMamas.metaTitle + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.cont.pageMamas.canonicalLink }
        });
    }
}
</script>
<style lang="scss">
@import '~/pages/VaraMamas.scss';
</style>