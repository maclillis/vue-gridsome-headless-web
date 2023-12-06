<template>
    <article class="explanation-block flex flex-col justify-center">
        <div class="explanation-block-inner self-center lg:w-1300 md:w-full">
            <h1 class="section-title">{{ cont.membershipExplanationBlock.sectionTitle }}</h1>
            <div class="section-description flex flex-col">
                <div class="section-description-inner w-full lg:w-fiftyfiv text-center self-center">
                    <p>{{ cont.membershipExplanationBlock.description }}</p>
                </div>
            </div>

            <div class="explanation-dots-wrap flex flex-wrap flex-col md:flex-row justify-center">
                <div class="exp-linethrough hidden md:flex"></div>
                <div class="exp-dot-wrap">
                    <div class="exp-circle">
                        <p>1</p>
                    </div>
                    <div class="exp-text">
                        <h5>{{ cont.membershipExplanationBlock.step1 }}</h5>
                    </div>
                </div>
                <div class="exp-dot-wrap">
                    <div class="exp-circle">
                        <p>2</p>
                    </div>
                    <div class="exp-text">
                        <h5>{{ cont.membershipExplanationBlock.step2 }}</h5>
                    </div>
                </div>
                <div class="exp-dot-wrap">
                    <div class="exp-circle">
                        <p>3</p>
                    </div>
                    <div class="exp-text">
                        <h5>{{ cont.membershipExplanationBlock.step3 }}</h5>
                    </div>
                </div>
                <div class="exp-dot-wrap">
                    <div class="exp-circle">
                        <p>4</p>
                    </div>
                    <div class="exp-text">
                        <h5>{{ cont.membershipExplanationBlock.step4 }}</h5>
                    </div>
                </div>
                <div class="exp-dot-wrap">
                    <div class="exp-circle">
                        <p><i class="fab fa-font-awesome-flag"></i></p>
                    </div>
                    <div class="exp-text">
                        <h5>{{ cont.membershipExplanationBlock.step5 }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import {gsap} from 'gsap';
export default {
    name: 'MembershipExplanationBlock',
    data: function() {
        return{
            cont: this.$localeJSON
        }
    },
    methods: {
        inView: function(e){
            if (e.type === 'enter'){
                let tl = gsap.timeline();

                tl.to('.exp-circle', {opacity: 1, scale:1, stagger:0.2, duration:0.3})
                .to('.exp-text', {opacity: 1, scale:1, stagger:0.2, duration:0.3})
                .to('.exp-linethrough', {opacity:1, duration:0.5});

                tl.play();
            }
        }
    }
}
</script>
<style lang="scss">
@import '~/components/blocks/MembershipExplanationBlock.scss';
</style>