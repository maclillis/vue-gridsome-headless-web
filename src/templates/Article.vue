<template>
    <Layout>
        <section class="content-inner inner flex flex-col">

            <article class="article-wrap flex flex-col self-center justify-center lg:w-1300 md:w-full">

                <div class="article-breadcrumbs"><g-link to="/"><i class="fas fa-home"></i></g-link> / <g-link to="/artiklar/">{{cont.templateArticle.breadcrumbParentTitle}}</g-link> / <p class="breadcrumb-title" v-html="$page.article.title"></p></div>

                <div class="article-wrap-inner flex flex-col md:flex-row gap-x-0 md:gap-x-5 lg:gap-x-10">
                    <div class="article-col w-full lg:w-sevtwo">
                        <div class="article-featured-wrap">
                            <div class="article-featured-image" v-bind:style="bgImage($page.article.featuredMedia.sourceUrl !== null ? $page.article.featuredMedia.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')">
                            </div>
                        </div>

                        <h1 class="article-title" v-html="$page.article.title"></h1>

                       <div class="article-info"> {{cont.templateArticle.published}} {{ formatDate($page.article.date) }} {{cont.templateArticle.by}} <span class="i-talic">{{ $page.article.author !== null ? $page.article.author.name : 'MammaFitness' }}</span></div>

                        <template>
                            <div class="article-categories-wrap flex flex-wrap">
                                <div class="article-category" v-for="( category ) in $page.article.categories.slice(0,1)" :key="category.id">
                                    <g-link :to="category.path">
                                        <p>{{ category.title }}</p>
                                    </g-link>
                                </div>
                            </div>
                        </template>

                        
                        <!--<div class="promotional-ad-space-wrap flex lg:hidden my-6">
                            <a href="https://shop.mammafitness.se/medlemskap" class="flex justify-end">
                                <g-image src="https://storage.googleapis.com/mammafitness/public/web/images/campaigns/valentines-banner.jpg" class="valentines-banner" alt="Alla Hjärtans Dag - 0 SEK i startavgift hela veckan" title="Alla Hjärtans Dag - 0 SEK i startavgift hela veckan"></g-image>
                            </a>
                        </div>-->

                        <div class="promotional-ad-space-wrap flex lg:hidden my-6">
                            <a href="https://www.mammafitness.se/se/#campaign-block" class="flex justify-end">
                                <div class="promotional-ad-space-inner flex w-sixtyfiv self-center">
                                    <div class="promotional-right flex flex-col">
                                        <h3 class="promotional-title">Just nu - Prova oss <span class="bolder">gratis</span> i två veckor!</h3>
                                        <div class="button-holder flex justify-center">
                                            <button class="btn btn--primary smaller-btn">Läs mer</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="article-content" v-html="$page.article.content"></div>

                        <div class="article-modified" v-if="$page.article.modified">{{cont.templateArticle.updated}} {{ formatDate($page.article.modified) }}</div>

                        <template>
                            <div class="article-tags-wrap flex flex-wrap">
                                <p class="tag-marker">{{cont.templateArticle.tagged}} </p>
                                <div class="article-tag" v-for="( tag ) in $page.article.tags" :key="tag.id">
                                    <g-link :to="tag.path">
                                        <p>{{ tag.title }}</p>
                                    </g-link>
                                </div>
                            </div>
                        </template>

                        <figure class="article-author-box">
                            <div class="author-info flex justify-between">
                                <div class="author-info-left">
                                    <div class="author-img" v-bind:style="bgImage($page.article.author !== null ? $page.article.author.mppAvatar._150 : 'https://storage.googleapis.com/mammafitness-wp/M_Logo_196_icon-150x150.png')"></div>
                                </div>
                                <div class="author-info-right">
                                    <h4 class="author-info-name">{{ $page.article.author !== null ? $page.article.author.name : 'MammaFitness'}}</h4>
                                    <h5 class="author-info-occupation">{{ $page.article.author !== null ? $page.article.author.acf.occupation : $t('template-article.editor')}}</h5>
                                    <div class="author-desktop-bio hidden lg:flex"><p>{{ $page.article.author !== null ? $page.article.author.description : '' }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="author-bio flex lg:hidden"><p>{{ $page.article.author !== null ? $page.article.author.description : '' }}</p>
                            </div>
                        </figure>
                    </div>
                    <div class="article-col flex flex-col justify-start self-start w-full lg:w-twentsev">

                        <!--<div class="promotional-ad-space-wrap hidden lg:flex  mb-10">
                            <a href="https://shop.mammafitness.se/medlemskap" class="flex justify-end">
                                <g-image src="https://storage.googleapis.com/mammafitness/public/web/images/campaigns/valentines-banner.jpg" class="valentines-banner" alt="Alla Hjärtans Dag - 0 SEK i startavgift hela veckan" title="Alla Hjärtans Dag - 0 SEK i startavgift hela veckan"></g-image>
                            </a>
                        </div>-->

                        <div class="promotional-ad-space-wrap hidden lg:flex  mb-10">
                            <a href="https://www.mammafitness.se/se/#campaign-block" class="flex justify-end">
                                <div class="promotional-ad-space-inner flex w-sixtyfiv self-center">
                                    <div class="promotional-right flex flex-col">
                                        <h3 class="promotional-title px-6">Just nu - Prova oss <span class="bolder">gratis</span> i två veckor!</h3>
                                        <div class="button-holder flex justify-center">
                                            <button class="btn btn--primary smaller-btn">Läs mer</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <h1 class="section-title px-5 py-6 md:py-0 md:px-0">{{cont.templateArticle.relatedTitle}}</h1>
                        
                        <div class="articles-cards-wrap" v-for="( category ) in $page.related.categories" :key="category.id">
                            <figure class="articles-card" v-for="{ node } in category.belongsTo.edges" :key="node.id">
                                <g-link :to="node.path">
                                    <div class="articles-card-featured-img flex flex-col justify-end" v-bind:style="bgImage(node.featuredMedia.mediaDetails.sizes.thumbnail !== null ? node.featuredMedia.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg')">
                                    </div>
                                    <div class="articles-card-content">
                                        <div class="articles-card-info inline-flex justify-between">
                                            <div class="articles-categories" v-for="( cat ) in node.categories.slice(0,1)" :key="cat.id">
                                                <h5 class="articles-card-category">{{ cat.title }}</h5>
                                            </div>
                                        </div>
                                        <h4 class="articles-card-title" v-html="node.title"></h4>
                                    </div>
                                </g-link>
                            </figure>
                        </div>

                        <NewsletterBlock />
                    </div>
                </div>

            </article>    
        </section>
    </Layout>
</template>

<page-query>
query Post ($id: ID!) {
    article: wordpressPost (id: $id) {
        id
        title
        content
        excerpt
        path
        date
        modified
        slug
        featuredMedia {
            sourceUrl
            mediaDetails {
                sizes {
                    thumbnail {
                        sourceUrl
                    }
                    medium {
                        sourceUrl
                    }
                    mediumLarge {
                        sourceUrl
                    }
                    large {
                        sourceUrl
                    }
                }
            }
        }
        acf {
            metaTitle
            metaDesc
        }
        categories {
            id
            title
            path
            slug
        }
        tags {
            id
            title
            path
            slug
        }
        author {
            id
            name
            mppAvatar {
                _150
            }
            acf {
                occupation
            }
            description
        }
    },
    related: wordpressPost (id: $id) {
        id
        title
        categories(limit: 4) {
            id
            title
            belongsTo  (limit:4, order:ASC, filter: { id: { nin: [$id] }} ) {
                edges {
                node {
                    ... on WordpressPost {
                        title
                        id
                        path
                        featuredMedia {
                            sourceUrl
                            mediaDetails {
                                sizes {
                                    thumbnail {
                                        sourceUrl
                                    }
                                    medium {
                                        sourceUrl
                                    }
                                    mediumLarge {
                                        sourceUrl
                                    }
                                    large {
                                        sourceUrl
                                    }
                                }
                            }
                        }
                        categories {
                            title
                            id
                        }
                        tags {
                            title
                            id
                        }
                    }
                }
                }
            }
        }
    },
    metadata {
      siteUrl
      pathPrefix
  }
}
</page-query>
<script>
import moment from 'moment';
import NewsletterBlock from '~/components/blocks/NewsletterBlock.vue';
import MammaFitnessGDPR from '~/mixins/mammafitness-gdpr.js';
export default {
    mixins: [MammaFitnessGDPR],
    components: {
        NewsletterBlock
    },
    data: function(){
        return {
            cont: this.$localeJSON,
        }
    },
    methods: {
        bgImage: function(image){
            return 'background-image: url("' + image + '");background-size:cover;';
        },
        stripTags: function(org) {
            return org.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, ' ').replace(/\n/g, '').replace(/&#8230;/g, '');
        },
        strngy: function (str) {	
		    return JSON.stringify(str);
        },
        HTMLDecode: function(str) {
			return str.replace(/&#(\d+);/g, function(dec) {
				return String.fromCharCode(dec);
			});
        },
        formatDate: function(value){
            return moment(String(value)).locale(this.$localeJSON.html.lang).format('LL')
        },
    },
    updated: function(){
        document.querySelector('.layout').classList.add('sub-page');
    },
    mounted(){
        document.querySelector('.layout').classList.add('sub-page');

        this.after_mount({
            page: { type: 'ArticlePage', vpTitle: this.$page.article.title + ' - MammaFitness', vpUrl: this.$page.metadata.pathPrefix + this.$page.article.path },
            article: this.$page.article
        });
    },
    metaInfo() {
        return {
            title: this.$page.article.acf.metaTitle !== '' ? this.HTMLDecode(this.$page.article.acf.metaTitle) : this.HTMLDecode(this.$page.article.title) + ' - MammaFitness',
            meta: [
                { name: "description", content: this.$page.article.acf.metaDesc !== '' ? this.HTMLDecode(this.$page.article.acf.metaDesc) : this.stripTags(this.$page.article.excerpt) },
                { name: "title", content: this.$page.article.acf.metaTitle !== '' ? this.HTMLDecode(this.$page.article.acf.metaTitle) : this.HTMLDecode(this.$page.article.title) + ' - MammaFitness' },
                { property: "og:url", content: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.article.path },
                { property: "og:type", content: 'article' },
                { property: "og:title", content: this.HTMLDecode(this.$page.article.title) },
                { property: "og:description", content: this.stripTags(this.$page.article.excerpt)},
                { property: "og:image", content: this.$page.article.featuredMedia !== null ? this.$page.article.featuredMedia.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg' }
            ],
            link: [
                { rel: 'canonical', href: this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.article.path }
            ],
            script: [
                { innerHTML: '{ "@context": "http://schema.org", "@type" : "Article", "name": ' + this.strngy(this.$page.article.title) +', "description": ' + this.strngy(this.stripTags(this.$page.article.excerpt)) +', "articleBody": '+ this.strngy(this.stripTags(this.$page.article.content)) +', "image": '+ this.strngy(this.$page.article.featuredMedia !== null ? this.$page.article.featuredMedia.sourceUrl : 'https://storage.googleapis.com/mammafitness/public/web/images/no-picture.jpg') +', "datePublished": '+ this.strngy(this.$page.article.date) +', "dateModified": '+ this.strngy(this.$page.article.modified) +', "author": '+ this.strngy(this.$page.article.author !== null ? this.$page.article.author.name : 'MammaFitness') +', "url": '+ this.strngy(this.$page.metadata.siteUrl + this.$page.metadata.pathPrefix + this.$page.article.path) +' }',
                  type: 'application/ld+json' }
            ]
        }
    }
}
</script>
<style lang="scss">
@import '~/templates/Article.scss';
</style>