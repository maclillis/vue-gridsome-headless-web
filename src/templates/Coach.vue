<template>
    <Layout>
        <section class="content-inner inner flex flex-col -mt-12 md:mt-0">
            <article class="coach-wrap lex flex-col self-center justify-center lg:w-1300 md:w-full">

                <div class="coach-wrap-inner flex flex-col self-center justify-center hidden md:flex">
                    <div class="article-breadcrumbs"><g-link to="/"><i class="fas fa-home"></i></g-link> / <g-link to="/vara-coacher/">{{cont.templateCoach.breadcrumbParentTitle }}</g-link> / {{$page.coach.name}}</div>

                    <div class="coach-grid grid grid-cols-2">
                        <div class="cols">
                            <div class="coach-header-wrap flex flex-col">
                                <div class="card-info">
                                    <p class="card-info-name">{{ $page.coach.name }}</p>
                                    <p class="card-info-title">{{ $page.coach.title }}</p>
                                </div>
                                <div class="coach-dekstop-content-wrap"><p  v-html="$page.coach.bio"></p></div>
                            </div>
                        </div>
                        <div class="cols flex flex-col justify-start">
                            <div class="coach-image-wrap flex self-center">
                                <g-image :src="$page.coach.imageURL" class="coach-img" :alt="$page.coach.name" :title="$page.coach.name"></g-image>
                            </div>
                        </div>
                </div>
                    <div class="flex back-page" @click="backPage">
                        <i class="fas fa-caret-left self-center"></i><h5>{{cont.templateCoach.backButton}}</h5>
                    </div>
                </div>

            </article> 

            <article class="coach-mobile-wrap flex md:hidden flex-col">

                <div class="article-breadcrumbs"><g-link to="/">Hem</g-link> / <g-link to="/vara-coacher/">{{cont.templateCoach.breadcrumbParentTitle }}</g-link> / {{$page.coach.name}}</div>

                <div class="coach-header-wrap flex" v-bind:style="bgImage($page.coach.imageURL)">
                    <div class="card-ovly"></div>
                    <div class="card-info self-end">
                        <p class="card-info-name">{{ $page.coach.name }}</p>
                        <p class="card-info-title">{{ $page.coach.title }}</p>
                    </div>
                </div>

                <div class="coach-content-wrap">
                    <p v-html="$page.coach.bio"></p>
                </div>

                <g-link to="/vara-coacher/" class="flex back-page ">
                    <i class="fas fa-caret-left self-center"></i><h5>{{cont.templateCoach.backButton}}</h5>
                </g-link>

            </article>       
        </section>
    </Layout>
</template>
<page-query>
query Coaches($id: ID!) {
    coach: coaches(id: $id) {
        ID
        name
        title
        bio
        slug
        imageURL
        path
        coach_type
        meta_title
        meta_description
    },
    metadata {
        siteUrl
        pathPrefix
    }
}
</page-query>
<script>
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';

export default {
    mixins: [MammaFitnessGDPR],
    data: function(){
        return {
            cont: this.$localeJSON,
        }
    },
    methods: {
        bgImage: function(image){
            return 'background-image: url("' + image + '");background-size:cover;';
        },
        backPage: function(){
            return  this.$router.go(-1);
        },
        strngy: function (str) {	
		    return JSON.stringify(str);
        },
        getCurrentUrl: function () {
            return this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.coach.slug;
        }
    },
    metaInfo() {
        return {
            title: this.$page.coach.meta_title !== '' ? this.$page.coach.meta_title : this.$page.coach.name + ' - MammaFitness',
            meta: [
                { name: "description", content: this.$page.coach.meta_description !== '' ? this.$page.coach.meta_description : this.$page.coach.description }
            ],
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.coach.path },
                //{ rel: 'alternate', hreflang: this.cont.google.referLang, href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.coach.path }
            ],
            script: [
                { innerHTML: '{ "@context": "http://schema.org", "@type" : "Person", "name": ' + this.strngy(this.$page.coach.name) +', "jobTitle": ' + this.strngy(this.$page.coach.title) + ', "description": ' + this.strngy(this.$page.coach.bio) +', "image": '+ this.strngy(this.$page.coach.imageURL) + ' }',type: 'application/ld+json' }
            ]
        }
    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.after_mount({
            page: { type: 'CoachPage', vpTitle: this.$page.coach.name + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.$page.coach.path },
            coach: this.$page.coach
        });
    }
}
</script>
<style lang="scss">
@import '~/templates/Coach.scss';
</style>