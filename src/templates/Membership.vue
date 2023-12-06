<template>
  <Layout>
    <div class="membership-mobile-hero-wrap lg:hidden">

        <h1 class="section-title" v-html="cont.templateMembership.sectionTitle + $page.membership.title"></h1>

        <div class="membership-mobile-hero-image" v-bind:style="bgImage($page.membership.featuredMedia.mediaDetails.sizes.large.sourceUrl)"></div>
        <div class="membership-mobile-hero-content">
          <div class="membership-mobile-content" v-html="$page.membership.content"></div>

          <a href="https://shop.mammafitness.se/medlemskap" target="_blank">
            <button class="btn btn--primary membership-btn">{{ cont.templateMembership.memberButton}}</button>
          </a>
        </div>
    </div>
    <div class="membership-hero-wrap hidden lg:flex" v-bind:style="bgImage($page.membership.featuredMedia.mediaDetails.sizes.large.sourceUrl)">
      <div class="membership-hero-inner flex flex-col">
        <div class="membership-hero-left flex flex-col justify-center lg:w-1300 md:w-full">
          <div class="membership-hero-left-inner">
            <h1 class="section-title" v-html="cont.templateMembership.sectionTitle + $page.membership.title"></h1>

            <div class="membership-hero-content">
              <div class="membership-content" v-html="$page.membership.content"></div>

              <a href="https://shop.mammafitness.se/medlemskap" target="_blank">
                <button class="btn btn--primary membership-btn">{{ cont.templateMembership.memberButton}}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="content-inner inner flex flex-col self-center lg:w-1300 md:w-full">

      <TimeMembershipCardsBlock v-show="$page.membership.acf.timecards" />

      <ComparisonTableBlock class="hidden md:flex">
        <img :src="$page.membership.acf.comparisonTable" class="comparison-table-svg" alt="Jämförelsetabell" title="Jämförelsetabell" />
      </ComparisonTableBlock>

      <a href="https://shop.mammafitness.se/medlemskap" target="_blank" class="flex justify-center py-20 px-10 md:px-0" v-show="$page.membership.timeMemberBlock">
        <button class="btn btn--primary membership-btn">{{ cont.templateMembership.memberButton}}</button>
      </a>

     <MembershipsQuickNavigationWidget />

    </section>

    <AppPromotionBlock />
  </Layout>
</template>

<page-query>
query Membership ($id: ID!) {
    membership: wordpressMedlemskap (id: $id) {
      title
      id
      content
      author {
        name
      }
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
      slug
      date
      type
      excerpt
      status
      link
      acf {
          timecards 
          comparisonTable
          ecommerceInfo
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
import TimeMembershipCardsBlock from '~/components/blocks/TimeMembershipCardsBlock.vue';
import ComparisonTableBlock from '~/components/blocks/ComparisonTableBlock.vue';
import AppPromotionBlock from '~/components/blocks/AppPromotionBlock.vue';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';
import MembershipsQuickNavigationWidget from '~/components/widgets/MembershipsQuickNavigationWidget.vue';

export default {
  mixins: [MammaFitnessGDPR],
  metaInfo() {
      return {
          title: this.$page.membership.acf.metaTitle !== '' ? this.$page.membership.acf.metaTitle : this.cont.templateMembership.metaTitle + this.HTMLDecode(this.$page.membership.title) + ' - MammaFitness',
          meta: [
            { name: "description", content: this.$page.membership.acf.metaDesc !== '' ? this.HTMLDecode(this.$page.membership.acf.metaDesc) : this.stripTags(this.$page.membership.excerpt)}
          ],
          link: [
            { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.templateMembership.canonicalLink+ this.$page.membership.slug + '/' },
            //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.membership.path }
          ]
      }
  },
  components: {
    TimeMembershipCardsBlock,
    ComparisonTableBlock,
    AppPromotionBlock,
    MembershipsQuickNavigationWidget
  },
  data: function(){
      return {
          cont: this.$localeJSON,
      }
  },
  methods: {
      bgImage: function(image){
        return 'background-image: url("' + image + '");background-size:cover;';
      },
      HTMLDecode: function(str) {
        return str.replace(/&#(\d+);/g, function(dec) {
          return String.fromCharCode(dec);
        });
      },
      stripTags: function(org) {
        return org.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, ' ').replace(/\n/g, '').replace(/&#8230;/g, '');
      },
      onloadTracking: function() {
        if (this.$page.membership.acf.ecommerceInfo != null) {
          try {
            let ecomInfo = JSON.parse(this.$page.membership.acf.ecommerceInfo); 
            this.$dataLayer.push_event('productDetailEvent', {
              ecommerce: {
                detail: {
                  actionField: {},
                  products: [ecomInfo]
                }
              },
              eventInfo: {
                category: 'Ecommerce',
                action: 'Product Detail',
                label: ecomInfo.name
              }
            });
          }
          catch {
            // input was not proper JSON
          }
        }

        this.after_mount({
          page: { type: 'MembershipPage', vpTitle: this.HTMLDecode(this.$page.membership.title) + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.cont.templateMembership.canonicalLink + this.$page.membership.slug },
        });
      }
  },
  mounted(){
    document.querySelector('.layout').classList.add('sub-page');

    this.onloadTracking();  
  },
  updated() {
    this.onloadTracking();
  }
}
</script>

<style lang="scss">
@import '~/templates/Membership.scss';
</style>