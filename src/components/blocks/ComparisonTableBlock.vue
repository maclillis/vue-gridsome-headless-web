<template>
    <article class="comparison-block flex justify-center">
        <div class="comparison-block-inner self-center lg:w-1300 md:w-full">
            <h1 class="section-title">{{ cont.comparisonTableBlock.sectionTitle }}</h1>

            <div class="comparison-table">
                <slot></slot>
            </div>
        </div>
    </article>
</template>
<script>
import {gsap} from 'gsap';
export default {
    name: 'FaqBlock',
    data: function() {
        return{
            cont: this.$localeJSON
        }
    },
    methods: {
        inView: function(e){
            if (e.percentInView >= '0.5'){
                gsap.to('.fa-check', {opacity: 1, scale:1, stagger:0.01, duration:0.3});
            }
        }
    }
}
</script>
<style lang="scss">
@import '~/components/blocks/ComparisonTableBlock.scss';
</style>