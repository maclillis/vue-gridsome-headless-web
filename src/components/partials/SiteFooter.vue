<template>
    <footer class="footer flex">
      <div class="inner py-30 lg:w-1300 md:w-full ">
        <div class="grid sm:grid-cols-1 px-5 md:px-5 md:grid-cols-4 lg:px-0 gap-y-10 gap-x-20">
          <div class="cols">
            <h4 class="pb-0 md:pb-3">{{ cont.footer.navTitle }}</h4>
            <ul>
              <g-link to="/artiklar/"><li>{{ cont.footer.navArticles }}</li></g-link>
              <g-link to="/artiklar/tag/recept/" ><li>{{ cont.footer.navRecipe }}</li></g-link>
              <g-link to="/vara-coacher/"><li>{{ cont.footer.navCoach }}</li></g-link>
              <g-link to="/vara-mamas/"><li>{{ cont.footer.navMamas }}</li></g-link>
              <g-link to="/om-oss/" ><li>{{ cont.footer.navAbout }}</li></g-link>
              <a href="https://trainimal.com/sv/jobb/" target="_blank" ><li>{{ cont.footer.navWork }}</li></a>
              <a href="https://trainimal.com/sv/investor-relations/" target="_blank" ><li>{{ cont.footer.navInvest }}</li></a>
            </ul>
          </div>
          <div class="cols">
            <h4 class="pb-0 md:pb-3">{{ cont.footer.contactTitle }}</h4>
            <ul class="footer-adress-list">
              <li v-html="cont.footer.contactTitle"></li>
              <li v-html="cont.footer.contactPhone"></li>
              <li v-html="cont.footer.contactAdress"></li>
              <li v-html="cont.footer.contactAdress2"></li>
              <li v-html="cont.footer.contactZip"></li>
            </ul>
          </div>
          <div class="cols">
            <h4 class="pb-0 md:pb-3">{{cont.footer.socialTitle}}</h4>
            <ul class="socials flex flex-col">
              <a href="https://www.facebook.com/MammaFitness/" target="_blank"><li class="flex">
                <i class="fab fa-facebook"></i>
                <h5 class="self-center">Facebook</h5>
              </li></a>
              <a href="https://www.instagram.com/mamma.fitness" target="_blank"><li class="flex">
                <i class="fab fa-instagram-square"></i>
                <h5 class="self-center">Instagram</h5>
              </li></a>
            </ul>
          </div>
          <div class="cols">
            <h4 class="pb-0 md:pb-3">{{cont.footer.appTitle}}</h4>
            <ul class="app-stores flex flex-col" id="app-stores-sv">
              <a href="https://apps.apple.com/se/app/mammafitness/id1506877275?itsct=apps_box&itscg=30200" target="_blank">
                <li class="flex"><img id="app-icon-ap" alt="Apple App Store" title="Apple App Store" src="https://storage.googleapis.com/mammafitness/public/web/icons/app-store-badge-sv.svg" /></li>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.trainimal.mammafitness&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
              <li class="flex"><img id="app-icon-go" alt="Google Play" title="Google Play" src="https://storage.googleapis.com/mammafitness/public/web/icons/google-play-badge-sv.svg" /></li>
              </a>
            </ul>
          </div>
        </div>
        <div class="grid px-5 md:px-0 md:grid-cols-1 lg:grid-cols-1">
          <div class="cols lg:flex lg:justify-center lg: pt-20">
            <ul class="misc-links lg:inline">
              <g-link to="/cookies/" ><li class="lg:inline-flex lg:px-5">{{cont.footer.otherCookie}}</li></g-link>
              <g-link to="/villkor/"><li class="lg:inline-flex lg:px-5">{{cont.footer.otherConditions}}</li></g-link>
              <g-link to="/privacypolicy/"><li class="lg:inline-flex lg:px-5">{{cont.footer.otherPrivacy}}</li></g-link>
            </ul>
          </div>
        </div>
        <div class="grid px-5 md:px-0 md:grid-cols-1 lg:grid-row-1 flex justify-center">
          <div class="cols md:flex md:justify-center">
            <p class="copyright-text">&copy; {{thisYear}} <a href="https://www.trainimal.com" target="_blank">Trainimal AB</a></p>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'SiteFooter',
  data: function(){
    return {
      thisYear: new Date().getFullYear(),
      cont: this.$localeJSON,
    }
  }
}
</script>

<style lang="scss">
@import '~/components/partials/SiteFooter.scss';
</style>