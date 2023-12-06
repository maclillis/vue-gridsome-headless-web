<template>
<div class="Desktop--menu-wrap md:flex justify-center">
  <div class="Desktop--menu-inner flex justify-between md:w-full lg:w-1300">
    <div class="Desktop--menu-left self-center">
      <div class="Desktop--menu-logo">
        <g-link to="/" class="flex mf-deskt-logo-svg-w">
          <img class="Desktop-menu-logo-img" alt="Mamma Fitness logo" title="Mamma Fitness logo" src="https://storage.googleapis.com/mammafitness/public/web/images/mafitness_logo_w.svg" />
        </g-link>
        <g-link to="/" class="flex mf-deskt-logo-svg-b">
          <img class="Desktop-menu-logo-img" alt="Mamma Fitness logo" title="Mamma Fitness logo" src="https://storage.googleapis.com/mammafitness/public/web/images/mafitness_logo.svg" />
        </g-link>
      </div>
    </div>
    <div class="Desktop--menu-right flex flex-row justify-between">
      <nav class="Desktop--menu--nav-wrap self-center">
        <g-link class="nav-link" to="/sa-funkar-det/"><p>{{ cont.navigation.howItWorks }}</p></g-link>
        <g-link to="/medlemskap/" class="has-items nav-link" id="membership">
          <p>{{ cont.navigation.membership }}</p><i class="fas fa-angle-down"></i>
          <div class="sub-ddown-wrap" id="sub-membership">
            <ul class="sub-ddown-list">
              <g-link to="/medlemskap/kost/">
                  <li>{{ cont.navigation.food}}</li>
              </g-link>
              <g-link to="/medlemskap/traning-och-kost/">
                  <li>{{ cont.navigation.exerciseFood}}</li>
              </g-link>
              <g-link to="/medlemskap/traning/">
                  <li>{{ cont.navigation.exercise}}</li>
              </g-link>
              <g-link to="/medlemskap/magtraning-nyblivna-mammor/">
                  <li>{{ cont.navigation.newmom}}</li>
              </g-link>
            </ul>
          </div>
        </g-link>
        <a href="https://shop.mammafitness.se" class="has-items nav-link" id="products">
        <p>{{ cont.navigation.shop }}</p><i class="fas fa-angle-down"></i>
          <div class="sub-ddown-wrap" id="sub-products">
            <ul class="sub-ddown-list">
              <a href="https://shop.mammafitness.se/produkter/">
                  <li>{{ cont.navigation.allProducts }}</li>
              </a>
              <a href="https://shop.mammafitness.se/produkter/77-traningsredskap/">
                  <li>{{ cont.navigation.equipment }}</li>
              </a>
              <a href="https://shop.mammafitness.se/produkter/71-proteintillskott/">
                  <li>{{ cont.navigation.protein }}</li>
              </a>
              <a href="https://shop.mammafitness.se/produkter/70-bocker/">
                  <li>{{ cont.navigation.books }}</li>
              </a>
              <a href="https://shop.mammafitness.se/produkter/82-aterhamtning/">
                  <li>{{ cont.navigation.recovery }}</li>
              </a>
              <a href="https://shop.mammafitness.se/produkter/81-presentkort/">
                  <li>{{ cont.navigation.giftCard }}</li>
              </a>
            </ul>
          </div>
        </a>
        <g-link class="nav-link" to="/traning/"><p>{{ cont.navigation.exercise }}</p></g-link>
        <g-link class="nav-link" to="/kost/"><p>{{ cont.navigation.food }}</p></g-link>
        <g-link class="nav-link" to="/motivation/"><p>{{ cont.navigation.motivation }}</p></g-link>
        <a @click="searchB">
          <img src="https://storage.googleapis.com/mammafitness/public/web/icons/search-solid-w.svg" class="search-icon search-w" alt="Search" title="Search" />
          <img src="https://storage.googleapis.com/mammafitness/public/web/icons/search-solid-b.svg" class="search-icon search-b" alt="Search" title="Search" />
        </a>
      </nav>
    <div class="Desktop--menu-aside self-center">
      <LoginHandler />
    </div>
    </div>
  </div>
</div>
</template>
<script>
import LoginHandler from '~/components/partials/LoginHandler.vue';

export default {
  name: 'NavDesktop',
  components: {
    LoginHandler,
  },
  data: function() {
    return{
          cont: this.$localeJSON,
    }
  },
  methods: {
    searchB: function() {
      this.$router.push(this.cont.navigationLinks.searchArticles + '#search')
      setTimeout(() => {
        document.querySelector('.search-form').classList.add('search-highlight');       
      }, 700);
    }
  }
}
</script>
<style lang="scss">
@import '~/components/navigation/NavDesktop.scss';
</style>