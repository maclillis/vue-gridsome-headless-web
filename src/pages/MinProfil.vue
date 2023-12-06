<template>
    <Layout>
        <section class="content-inner inner flex flex-col">

            <article class="my-account-wrap flex flex-col self-center justify-center lg:w-1300 w-full">

                <h1 class="section-title">{{cont.pageProfile.sectionTitle}}</h1>

                <div class="my-account-iframe-wrap">
                    <iframe src="/se/konto/profil/" id="my-acoount-iframe" scrolling="no" frameborder="0" allowtransparency="true" loading="lazy" width="100%" height="600"></iframe>
                </div>
            
            </article>

        </section>
    </Layout>
</template>
<page-query>
query {
  metadata {
      siteUrl
      pathPrefix
  }
}
</page-query>
<script>

export default {
    metaInfo() {
        return {
            title: this.cont.pageProfile.metaTitle + ' - MammaFitness',
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageProfile.canonicalLink },
                { rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageProfile.canonicalLink }
            ]
        }
    },
    data: function(){
        return {
            cont: this.$localeJSON,
        }
    },
    methods: {
        resizeIframe: function (id, other_domain) {
            var iframe = document.getElementById(id);
            window.addEventListener('message', function(event) {
                if (event.origin !== other_domain) return;
                if (isNaN(event.data)) return; 
                var height = parseInt(event.data) + 120; 
                iframe.height = height + "px";
            }   , false);
        }
    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.resizeIframe('my-acoount-iframe', 'https://www.mammafitness.se');

        //this.iframeResize();
    }
}
</script>

<style lang="scss">
@import '~/pages/MinProfil.scss';
</style>
