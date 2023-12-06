<template>
    <article class="time-membership-block flex flex-col">
        <div class="time-membership-block-inner">
            
            <h1 class="section-title mb-28">{{ cont.timeMembershipsCardsBlock.sectionTitle }}</h1>
            
            <div class="concept-cards-wrap flex-col-reverse md:flex-col grid gap-y-32 sm:grid-cols-1 md:grid-cols-4 md:gap-y-5 md:gap-x-8">
                <div class="concept-card flex flex-col" v-for="card in cont.timeMembershipsCardsBlock.cards" :key="card.id" v-bind:class="{'picked-border': card.picked}">
                    <div class="concept-card-days-holder">
                        <div class="concent-card-days" v-bind:class="{'picked-bg': card.picked}">
                            <h2 class="concept-days-heading">{{ card.days }}</h2>
                        </div>
                    </div>
                    <div class="concept-subheading">
                        <h3>{{ cont.timeMembershipsCardsBlock.subHeading }}</h3>
                    </div>
                    <div class="concept-card-excerpt">
                        <p v-html="card.subheading"></p>
                    </div>
                    <div class="concept-card-checklist">
                        <ul>
                            <li v-for="checklist in card.checklist" :key="checklist.id" v-html="checklist.item"></li>
                        </ul>
                    </div>
                    <div class="concept-card-picked-wrap" v-show="card.picked">
                        <h3 class="flex justify-center">{{ cont.timeMembershipsCardsBlock.pickedTitle }}</h3>
                    </div>
                </div>
            </div>

            <div class="button-wrap flex justify-center mt-20 md:my-10">
                <a href="https://shop.mammafitness.se/medlemskap" target="_blank">
                    <button class="btn btn--primary">{{ cont.timeMembershipsCardsBlock.memberButton }}</button>
                </a>
            </div>
        </div>
    </article>
</template>
<script>
import {gsap} from 'gsap';
export default {
  name: 'TimeMembershipCardsBlock',
  data: function() {
      return{
            cont: this.$localeJSON,
            picked: false,
      }
  },
  methods: {
            toggleClass: function(){
                this.cards.picked = !this.picked;
            },
            inView: function(e){
                if (e.type === 'enter'){
                    gsap.to('.concept-card', {opacity: 1, stagger:0.2, duration:0.3});
                }
            }
  }
}
</script>
<style lang="scss">
@import '~/components/blocks/TimeMembershipCardsBlock.scss';
</style>