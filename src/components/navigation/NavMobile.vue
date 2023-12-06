<template>
    <div class="Mobile--menu-wrap flex justify-between md:hidden">
        <transition name="fade" v-on:enter="enter" v-on:leave="exit">
            <NavMobileOverlay v-if="show">
                <ul id="Mobile--menu-ul" >
                    <g-link to="/sa-funkar-det/" class="list-item"><li>{{ cont.navigation.howItWorks }}</li></g-link>
                        <li class="has-items list-item">
                            <vsa-list>
                                <vsa-item v-for="toggle in cont.navigation.mobileToggles" :key="toggle.id">
                                    <vsa-heading>
                                        {{toggle.heading}}
                                    </vsa-heading>
                                    <vsa-content>
                                        <ul class="sub-ddown-list" >
                                            <a :href="item.link" v-for="item in toggle.items" :key="item.id"  @click="show = !show" v-on:click="toggleClass">
                                                <li>{{item.heading}}</li>
                                            </a>
                                        </ul>
                                    </vsa-content>
                                </vsa-item>
                            </vsa-list>
                        </li>
                    <g-link to="/traning/" class="list-item"><li>{{ cont.navigation.exercise }}</li></g-link>
                    <g-link to="/kost/" class="list-item"><li>{{ cont.navigation.food }}</li></g-link>
                    <g-link to="/motivation/" class="list-item"><li>{{ cont.navigation.motivation }}</li></g-link>
                </ul>
                <div class="mobile-menu-divider">
                    <div class="mobile-linethrough"></div>
                    <div class="mobile-menu-divider-title flex justify-center" v-html="cont.navigation.moreFromUs">
                    </div>
                </div>
                <div class="secondary-mobile-menu-wrap">
                    <ul class="secondary-mobile-menu-list">
                        <g-link to="/vara-coacher/" @click="show = !show" v-on:click="toggleClass">
                            <li>
                                <img src="https://storage.googleapis.com/mammafitness/public/web/icons/coaches.svg" class="second-icon-svg anim-elem" alt="coaches icon" title="coaches icon"/> 
                                <p class="anim-elem">{{ cont.navigation.coaches }}</p>
                            </li>
                        </g-link>
                        <g-link to="/vara-mamas/" @click="show = !show" v-on:click="toggleClass">
                            <li class="middle-item">
                                <img src="https://storage.googleapis.com/mammafitness/public/web/icons/mamas.svg" class="second-icon-svg anim-elem" alt="mamas icon" title="mamas icon"/>
                                <p class="anim-elem">{{ cont.navigation.mamas }}</p>
                            </li>
                        </g-link>
                        <g-link to="/artiklar/tag/recept/" @click="show = !show" v-on:click="toggleClass">
                            <li>
                                <img src="https://storage.googleapis.com/mammafitness/public/web/icons/recipe.svg" class="second-icon-svg anim-elem" alt="recipe icon" title="recipe icon"/>
                                <p class="anim-elem">{{ cont.navigation.recipe }}</p>
                            </li>
                        </g-link>
                    </ul>
                </div>
                <LoginHandler />
            </NavMobileOverlay>
        </transition>
        <div class="Mobile--menu-left flex">
            <button class="hamburger--slider" type="button" id="Mobile-menu-bars" @click="show = !show" v-on:click="toggleClass" v-bind:class="{'is-active add-light': isActive}">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div class="Mobile--menu-center flex">
            <g-link to="/" class="flex mf-logo-svg-w" >
                <g-image class="Mobile-menu-logo-img self-center" alt="Mamma Fitness logo" title="Mamma Fitness logo" src="https://storage.googleapis.com/mammafitness/public/web/images/mafitness_logo_w.svg" width="200" />
            </g-link>
            <g-link to="/" class="flex mf-logo-svg-b">
                <g-image class="Mobile-menu-logo-img self-center" alt="Mamma Fitness logo" title="Mamma Fitness logo" src="https://storage.googleapis.com/mammafitness/public/web/images/mafitness_logo.svg" width="200" />
            </g-link>
        </div>
        <div class="Mobile--menu-right flex">
            <div class="Local--selector flex">
                <a href="https://shop.mammafitness.se/medlemskap" class="flex" v-if="!loggedIn">
                    <button class="btn btn--primary-small member-btn self-center" >{{ cont.navigation.memberButton }}</button>
                </a>
                <g-link to="/min-profil/" class="flex self-center" v-if="loggedIn">
                    <button class="btn btn--primary login-button profile-button"><i class="fas fa-user"></i></button>
                </g-link>
            </div>
        </div>
    </div>
</template>
<script>
import NavMobileOverlay from '~/components/navigation/NavMobileOverlay.vue';
import LoginHandler from '~/components/partials/LoginHandler.vue';
import {gsap} from 'gsap';
export default {
  name: 'NavMobile',
  components: {
      NavMobileOverlay,
      LoginHandler
  },
  data: function() {
      return{
        show: false,
        isActive: false,
        noScroll: false,
        loggedIn: false,
        cont: this.$localeJSON,
      }
  },
  methods: {
      toggleClass: function(){
        this.isActive = !this.isActive;

        //Add no bg for header if mobile menu is open
        let navBg = document.querySelector('header');
        !this.isActive ? navBg.classList.remove('no-bg') : navBg.classList.add('no-bg');

        let bodyScroll = document.body;
        this.show ? bodyScroll.classList.add('no-scroll') : bodyScroll.classList.remove('no-scroll') ;

        this.scrolled();

      },
      scrolled: function() {
        if (window.scrollY >= 50) {
            document.querySelector('.layout').classList.add('after-show');
        } else  {
            document.querySelector('.layout').classList.remove('after-show');
        }
      },
      enter: function () {
        //Add staggering animation on menu open for list
        let tween = gsap.from(['#Mobile--menu-ul .list-item', '#btn-login', '.mobile-menu-divider', '.anim-elem' ], {opacity: 0, y:10, stagger:0.2, duration:0.2});
        tween.restart();
        document.querySelector('.mf-logo-svg-b').style.display = "flex";
        document.querySelector('.mf-logo-svg-w').style.display = "none";
      },
      exit: function () {
        if (window.scrollY >= 50) {
            document.querySelector('.mf-logo-svg-b').style.display = "flex";
            document.querySelector('.mf-logo-svg-w').style.display = "none";
        } else  {
            document.querySelector('.mf-logo-svg-b').style.display = "none";
            document.querySelector('.mf-logo-svg-w').style.display = "flex";
        }
      },
    userLogin: function(){
        if( document.cookie.indexOf('auth=') !== -1) {
            this.loggedIn = !this.loggedIn;
        } else {
            this.loggedIn === false;
        }
        }
  },
  beforeMount () {
    window.addEventListener('scroll', this.scrolled);
  },
  mounted() {

    //Login check
    this.userLogin();
  },
  beforeDestroy(){
    // Remove no scroll before component get's destroyed and goes to a new page
    this.show ? document.body.classList.remove('no-scroll'): ' ';

    window.removeEventListener('scroll', this.scrolled);
  }

}
</script>

<style lang="scss">
@import '~/components/navigation/NavMobile.scss';
</style>