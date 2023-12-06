<template>

    <article class="campaign-promotion-block-wrap flex flex-col justify-end">
        <a id="campaign-block"></a>
        <div class="campaign-promotion-big-wide flex flex-col justify-center">
            <div class="campaign-promotion-big-wide-inner flex flex-col justify-center lg:w-1300 self-center">
                <div class="section-row w-full flex flex-col md:flex-row justify-center">
                    <div class="section-col w-full">
                        <div class="element-container flex flex-col justify-center">

                        </div>
                    </div>
                    <div class="section-col w-full md:w-sevfiv flex">
                        <div class="copy-content hidden md:flex flex-col items-center">
                            <h1 class="section-title">{{cont.campaignPromotionBlock.sectionTitle}}</h1>
                            <p class="section-paragraph">{{cont.campaignPromotionBlock.sectionParagraph}}</p>
                        </div>
                        <!--<div class="copy-content hidden md:flex flex-col">
                            <h1 class="section-title">Få ett presentkort värt 500 :-</h1>
                            <p class="section-paragraph">Vid köp av <span>valfritt 90-dagsmedlemskap</span></p>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="campaign-info-under-image flex md:hidden"></div>
        <div class="campaign-info-under-wrap flex flex-col justify-center">
            <div class="campaign-info-under-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-10 flex flex-col justify-center w-full lg:w-1300 self-center">
                <div class="campaign-info-under-col flex flex-col lg:hidden">
                    <h4 class="first-paragraph">Prova gratis i två veckor</h4>
                    <p>Nu har du möjlighet att prova MammaFitness koncept under två kostnadsfria veckor med träningsupplägg och kostschema. Kom i gång med vår coachfria version av MammaFitness kost- och träningsapp!</p>
                </div>
                <div class="campaign-info-under-col px-5 lg:px-0">
                    <h4>Detta ingår i erbjudandet</h4>
                    <ul>
                        <li>Två veckor kostnadsfri tillgång till MammaFitness app</li>
                        <li>Två träningsprogram, en per vecka, för dig som nybliven mamma.</li>
                        <li>Kostdagbok med över 1000 recept</li>
                        <li>Kostregistrering med protein/ kolhydrater/fett- och kaloriräknare</li>
                        <li>Smarta funktioner för att följa din utveckling över tid, och mycket mer!</li>
                    </ul>
                </div>
                <div class="campaign-info-under-col px-5 lg:px-0">
                    <h4>Gör så här</h4>
                    <ol>
                        <li>Ladda ner appen i App store (iPhone) eller Google Play (Android) via ikonerna nedan</li>
                        <li>Klicka på "Bli medlem"</li>
                        <li>Välj "Prova gratis i 14 dagar"</li>
                    </ol>
                    <div class="app-stores-holder">
                        <a href="https://apps.apple.com/se/app/mammafitness/id1506877275?itsct=apps_box&itscg=30200" target="_blank">
                            <img id="app-icon-ap" alt="Apple App Store" title="Apple App Store" src="https://storage.googleapis.com/mammafitness/public/web/icons/app-store-badge-sv.svg" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.trainimal.mammafitness&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
                            <img id="app-icon-go" alt="Google Play" title="Google Play"  src="https://storage.googleapis.com/mammafitness/public/web/icons/google-play-badge-sv.svg" />
                        </a>
                    </div>
                </div>
            </div>
            <!--<div class="campaign-info-under-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-5 lg:gap-y-0 lg:gap-x-10 flex flex-col justify-center w-full lg:w-1300 self-center">
                <div class="campaign-info-under-col flex flex-col lg:hidden">
                    <h4 class="first-paragraph">Få ett presentkort värt 500 :-</h4>
                    <p>Vid köp av <span>valfritt 90-dagsmedlemskap</span></p>
                </div>
                <div class="campaign-info-under-col px-5 lg:px-0">
                    <ul>
                        <li>Erbjudandet gäller både nya kunder samt förlängning av nuvarande medlemskap</li>
                        <li>Presentkortskoden skickas i separat mail 3-5 dagar efter genomfört köp</li>
                        <li>Presentkorten är giltiga två år från köpet och kan användas på alla produkter/medlemskap på shop.mammafitness.se</li>
                    </ul>
                </div>
                <div class="campaign-info-under-col px-5 lg:px-0">
                    <div class="button-wrap flex justify-center md:my-10">
                        <a href="https://shop.mammafitness.se/medlemskap/?csrc=GiftCard21" target="_blank">
                            <button class="btn btn--primary">Bli medlem</button>
                        </a>
                    </div>
                </div>
            </div>-->
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
@import '~/components/blocks/CampaignPromotionBlock.scss';
</style>