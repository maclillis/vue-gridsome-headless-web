<template>
    <article class="valentines-block-wrap flex flex-col justify-center">
        <div class="valentines-block-inner flex flex-col md:flex-row justify-start w-full lg:w-1300 self-center">
            <div class="valentines-block-col w-full md:w-half flex flex-col justify-center self-center md:mb-16">
                <h1 class="valentines-lead flex justify-center self-center md:self-start">Träning = starka hjärtan</h1>
                <a href="https://shop.mammafitness.se/medlemskap/" class="flex self-center md:self-start">
                    <div class="valentines-cta-wrap flex justify-center self-center md:self-start" id="valentines-campaign-cta">
                            <div class="valentines-cta-inner flex flex-col justify-center gtm-v">
                                <p class="valentines-become-member p gtm-v">Bli medlem</p>
                                <p class="valentines-pricing p gtm-v">0 SEK</p>
                                <p class="valentines-subtitle p gtm-v">i startavgift<br/> hela veckan</p>
                                <p class="valentines-click-here p gtm-v">Klicka här!</p>
                            </div>
                    </div>
                </a>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    data: function() {
        return{
            cont: this.$localeJSON
        }
    }
}
</script>

<style lang="scss">
@import '~/components/blocks/campaigns/ValentinesDayBlock.scss';
</style>