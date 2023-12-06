<template>
    <Layout>
        <section class="content-inner inner flex flex-col">

            <article class="my-account-wrap flex flex-col self-center justify-center lg:w-1300 w-full">

                <h1 class="section-title">{{cont.pageLogin.sectionTitle}}</h1>

                <div class="my-account-iframe-wrap">
                    <iframe src="/se/konto/logga-in/" id="my-account-iframe" scrolling="no" frameborder="0" allowtransparency="true" width="100%" height="600"></iframe>
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
            title: this.cont.pageLogin.metaTitle + ' - MammaFitness',
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageLogin.canonicalLink },
                { rel: 'alternate', hreflang: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.cont.pageLogin.canonicalLink }
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
        },
        loginRedirect: function(other_domain) {
            document.getElementById('my-account-iframe').addEventListener('load', function(){
                window.addEventListener('message', function(check) {
                if (check.data === true) {
                    window.location.href = 'https://www.mammafitness.se/se/min-profil';
                }
                if (check.origin !== other_domain) return; 
                if (isNaN(check.data)) return; 
                //router.push('/se/min-profil');
            }   , false);
            })
        }
    },
    updated: function(){
        document.querySelector('.layout').classList.add('sub-page');

        this.resizeIframe('my-account-iframe', 'https://www.mammafitness.se');

    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.resizeIframe('my-account-iframe', 'https://www.mammafitness.se');

        this.loginRedirect();

    }
}
</script>

<style lang="scss">
@import '~/pages/LoggaIn.scss';
</style>
