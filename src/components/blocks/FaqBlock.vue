<template>
    <article class="faq-section flex justify-center">
        <div class="faq-section-inner self-center lg:w-1300 md:w-full">
            <h1 class="section-title">{{ cont.faqBlock.sectionTitle }}</h1>
            <div class="toggle-wrap flex flex-col m-auto w-full lg:w-sevfiv" v-for="item in cont.faqBlock.items" :key="item.id">
                <div class="--drawer">
                    <p v-html="item.question"></p>
                </div>
                <div class="--panel">
                    <div class="panel-content" v-html="item.answer"></div>
                </div>
            </div>
            <h4 class="faq-further-more" v-html="cont.faqBlock.furtherMore"></h4>
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
            if (e.type === 'enter'){
            gsap.to('.--drawer', {opacity: 1, x:0, stagger:0.2, duration:0.2});
            }
        }
    },
    mounted() {

        // Toogle functionality for FAQ
        var acc = document.getElementsByClassName("--drawer");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            });
        }
    }
}
</script>
<style lang="scss">
@import '~/components/blocks/FaqBlock.scss';
</style>