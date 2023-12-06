<template>
  <section class="hero-wrap flex flex-col">
    <div class="hero-desktop-wrap hidden md:flex flex-col justify-center">
        <video src="https://storage.googleapis.com/mammafitness/public/web/videos/mf-hero-videos-heavy-metal-full.mp4" autoplay muted loop playsinline webkit-playsinline class="hero-video" type="video/mp4" poster="https://storage.googleapis.com/mammafitness/public/web/images/mfposterhero.jpg"></video>
      <div class="hero-desktop-inner flex flex-col w-full lg:w-1300 justify-center self-center px-0 pt-0">

          <div class="hero-content-row w-full flex flex-col md:mx-20 lg:mx-0 md:flex-row">
            <div class="hero-content-col w-full md:w-half flex flex-col">
              <div class="hero-content-inner">
                <h1 class="section-title" v-html="cont.heroBlock.sectionTitle"></h1>
                <p class="section-paragraph">{{ cont.heroBlock.sectionFirstParagraph }}</p>
                <p class="section-paragraph">{{ cont.heroBlock.sectionSecondParagraph }}</p>
                <p class="section-paragraph bolded">{{ cont.heroBlock.sectionBoldedParagraph }}</p>
              </div>
            </div>
            <div class="slide-col w-full md:w-fourty flex justify-center">
              <div class="element-container flex">
                <a v-smooth-scroll href="#campaign-block">
                  <div class="promotional-splash-wrap self-center flex flex-col justify-end">
                    <div class="promotional-splash-inner flex flex-col justify-center items-center">
                      <h3 class="promotional-title self-center">Just nu - prova gratis i två veckor</h3>
                      <h4 class="promotional-undertitle self-center">Klicka här för att läsa mer</h4>
                    </div>
                </div>
                </a>
              </div>
            </div>
          </div>

          <div class="button-wrap flex flex-col lg:w-half md:inline-flex md:flex-row mx-20 lg:mx-0">
            <a href="https://shop.mammafitness.se/medlemskap">
              <button class="btn btn--primary mb-3 lg:mr-6">{{ cont.heroBlock.memberButton }}</button>
            </a>
            <g-link to="/sa-funkar-det/">
              <button class="btn btn--third mb-3">{{ cont.heroBlock.readmoreButton }}</button>
            </g-link>
          </div>
          
      </div>
      <div class="hero-desktop-inner-ovly"></div>
      <div class="hero-desktop-inner-shadow"></div>
    </div>

    <div class="hero-mobile-wrap flex md:hidden">
      <div class="hero-mobile-inner flex flex-col justify-start w-full">
        <div class="hero-mobile-multimedia-holder flex flex-col justify-end">
          <video src="https://storage.googleapis.com/mammafitness/public/web/videos/mf-hero-videos-heavy-metal-full.mp4" autoplay muted loop playsinline webkit-playsinline class="hero-mobile-video" type="video/mp4"></video>
          <h1 class="section-title self-center" v-html="cont.heroBlock.sectionTitle"></h1>
          <div class="hero-multimedia-ovly"></div>
        </div>
        <a href="#campaign-block" v-smooth-scroll>
          <div class="promotional-splash-mobile-wrap self-center flex flex-col justify-end">
            <div class="promotional-splash-mobile-inner flex flex-col justify-center items-center">
              <h3 class="promotional-title self-center">Just nu - prova gratis i två veckor</h3>
              <h4 class="promotional-undertitle self-center">Klicka här för att läsa mer</h4>
            </div>
          </div>
        </a>
        <div class="hero-mobile-usp-holder">
          <p class="section-paragraph">{{ cont.heroBlock.sectionFirstParagraph }}</p>
          <p class="section-paragraph bolded">{{ cont.heroBlock.sectionBoldedParagraph }}</p>
        </div>
        <div class="hero-mobile-cta-holder">
          <div class="button-wrap flex flex-col lg:w-half md:inline-flex md:flex-row">
            <a href="https://shop.mammafitness.se/medlemskap">
              <button class="btn btn--primary mb-3 lg:mr-6">{{ cont.heroBlock.memberButton }}</button>
            </a>
            <g-link to="/sa-funkar-det/">
              <button class="btn btn--secondary mb-3">{{ cont.heroBlock.readmoreButton }}</button>
            </g-link>
         </div>
        </div>
        <hr class="hero-bottom-line flex justify-center md:hidden" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HeroBlock',
  data: function() {
    return{
        cont: this.$localeJSON
    }
  }
}
</script>

<style lang="scss">
@import '~/components/blocks/HeroBlock.scss';
</style>