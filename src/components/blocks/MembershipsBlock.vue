<template>
    <article class="memberships-block-wrap flex flex-col">
        <div class="memberships-block-inner md:self-center lg:w-1300 md:w-full">
            <h1 class="section-title">{{ cont.membershipsBlock.sectionTitle }}</h1>

            <vsa-list class="memberships-card-wrap grid gap-y-4 grid-cols-1 md:gap-y-8 md:grid-cols-4 lg:grid-cols-4 md:gap-x-2 lg:gap-x-6">
                <vsa-item class="memberships-card" v-for="membership in cont.membershipsBlock.memberships" :key="membership.id" v-bind:forceActive="resTog">
                    <vsa-heading class="memberships-card-heading">
                        <h4 class="memberships-title"> {{ membership.name }} </h4>
                        <g-image src="https://storage.googleapis.com/mammafitness/public/web/icons/bestvalue.svg" v-if="membership.valued" class="best-valued" alt="Best Value" title="Best Value" />
                    </vsa-heading>

                    <vsa-content class="memberships-card-content">
                        <p class="memberships-intro md:h-90">{{ membership.intro }}</p>

                        <ul class="memberships-points md:h-190">
                            <li v-for="point in membership.points" :key="point.id">{{point.item}}</li>
                        </ul>

                        <p class="memberships-points-date" v-html="membership.date"></p>
                        
                        <g-link :to="membership.link">
                            <div class="memberships-bottom" v-on:click="trackClick(membership)">
                                <h5 class="memberships-cta">{{ cont.membershipsBlock.readmoreButton }}<i class="fas fa-caret-right"></i></h5>
                            </div>
                        </g-link>
                    </vsa-content>
                </vsa-item>
            </vsa-list>

            <div class="button-wrap flex justify-center md:my-10">
                <a href="https://shop.mammafitness.se/medlemskap" target="_blank">
                    <button class="btn btn--primary">{{ cont.membershipsBlock.memberButton }}</button>
                </a>
            </div>
        </div>
    </article>
</template>
<script>
import {gsap} from 'gsap';
export default {
  name: 'MembershipsBlock',
    components: {
  },
    data: function() {
      //Hardcoded Membership content
      return{
        resTog:false,
        valued: false,
        cont: this.$localeJSON
      }
  },
    methods: {
        // Check screen width and dynamically open or close the memebership cards depending on screen size
        handleResize: function(){
            if (this.$screen.md){
                this.resTog = true;
            } else if (!this.$screen.md) {
                this.resTog = false;
            }
        },
        inView: function(e){
            if (e.type === 'enter'){
                gsap.to('.memberships-card', {opacity: 1, stagger:0.2, duration:0.5});
            }
        },
        trackClick: function(obj) {            
            this.$dataLayer.push_event('productClickEvent', {
                ecommerce: {
                    click: {
                        actionField: {},
                        products: [obj.ecomData],
                    }
                },
                eventInfo: {
                    category: 'Ecommerce',
                    action: 'Product Click',
                    label: obj.name,
                    value: undefined
                }
            })
        }
    },
    watch: {
        '$screen.width'() {
            this.handleResize();
        }
    },
    mounted() {
        this.handleResize();
    }
}
</script>
<style lang="scss">
@import '~/components/blocks/MembershipsBlock.scss';
</style>