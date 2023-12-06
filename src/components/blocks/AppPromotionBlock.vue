<template>

    <article class="app-promotion-block-wrap flex flex-col justify-end">

        <div class="app-promotion-big-wide flex flex-col justify-center">
            <div class="app-promotion-big-wide-inner flex flex-col justify-center lg:w-1300 self-center">

            <div class="section-row w-full flex flex-col md:flex-row justify-center">
                <div class="section-col w-full md:w-sixtyfiv flex">
                    <div class="copy-content flex flex-col">
                        <h1 class="section-title">{{cont.appPromotionBlock.sectionTitle}}</h1>
                        <p class="section-paragraph">{{cont.appPromotionBlock.sectionParagraph}}</p>
                        <div class="app-badges-holder flex md:inline-flex justify-start">
                            <a href="https://apps.apple.com/se/app/mammafitness/id1506877275?itsct=apps_box&itscg=30200" target="_blank">
                                <img src="https://storage.googleapis.com/mammafitness/public/web/icons/app-store-badge-sv.svg" id="app-icon-ap" class="app-store-icon" alt="App Store Icon" title="App Store Icon" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.trainimal.mammafitness&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank" >
                                <img src="https://storage.googleapis.com/mammafitness/public/web/icons/google-play-badge-sv.svg" id="app-icon-go" class="google-store-icon" alt="Google Play Icon" title="Google Play Icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="section-col w-full">
                    <div class="element-container flex flex-col justify-center">
                        <video class="element-video self-start md:self-end" loop autoplay muted webkit-playsinline playsinline src="https://storage.googleapis.com/mammafitness/public/web/videos/mf_app_vid_nosound.mp4" poster="https://storage.googleapis.com/mammafitness/public/web/images/app-video-poster.jpg" type="video/mp4"></video>
                    </div>
                </div>
            </div>
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
@import '~/components/blocks/AppPromotionBlock.scss';
</style>