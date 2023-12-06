<template>
    <article class="newsletter-block flex flex-col">
        <div class="newsletter-block-inner lg:self-center lg:w-1300 sm:w-full">
            <h1 class="section-title py-10 md: py-0">{{ cont.newsletterBlock.sectionTitle }}</h1>
        </div>
        <div class="newsletter-block-wide flex flex-row justify-center ">
            <div class="newsletter-block-wide-inner flex self-center justify-center flex-col lg:w-1300 sm:w-full">
                <div class="newsletter-block-holder flex flex-col sm:w-full lg:w-fourty md:w-half">
                    <h4 class="under-title self-center" v-if="!show">{{ cont.newsletterBlock.underTitle }}</h4>
                    <template>
                        <mailchimp-subscribe
                            url="https://mammafitness.us16.list-manage.com/subscribe/post-json"
                            user-id="830c1baae23457cca56abb2fc"
                            list-id="3a162e7f82"
                            @error="onError"
                            @success="onSuccess"
                        >
                            <template v-slot="{ subscribe, setEmail, error, success, loading }">
                                <form id="newsletter-form" class="form lg:m-0" @submit.prevent="subscribe">
                                    <input type="email" class="form--email lg:w-full " placeholder="Din e-postadress" @input="setEmail($event.target.value)" v-if="!show"  required />
                                    <button type="submit" class="btn btn--primary lg:my-8" v-if="!show">{{ cont.newsletterBlock.submitButton }}</button>
                                    <input type="checkbox" id="gdpr_3" name="gdpr[3]" value="Y" class="av-checkbox" checked style="visibility:hidden;"> 
                                    <div class="flex flex-col justify-center sucess-holder" v-if="error">
                                        <h3 class="sucess-heading flex flex-col self-center">{{ cont.newsletterBlock.failTitle }}</h3>
                                        <p class="sucess-text flex flex-col self-center">{{ cont.newsletterBlock.failText }}</p>
                                    </div>
                                    <div class="flex flex-col justify-center sucess-holder" v-if="success">
                                        <h3 class="sucess-heading flex flex-col self-center">{{ cont.newsletterBlock.sucessTitle }}</h3>
                                        <p class="sucess-text flex flex-col self-center">{{ cont.newsletterBlock.sucessText }}</p>
                                    </div>
                                   <div class="flex flex-col justify-start" v-if="loading"></div>
                                </form>
                            </template>
                        </mailchimp-subscribe>
                    </template>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
export default {
  name: 'NewsletterBlock',
    components: {
    MailchimpSubscribe,
  },
    data: function() {
      return{
        show: false,
        cont: this.$localeJSON
      }
  },
  methods: {
    onError() {
      this.show = !this.show;
    },
    onSuccess() {
      this.show = !this.show;

      dataLayer.push({'event': 'formSignup'});
    },
  },
}
</script>
<style lang="scss">
@import '~/components/blocks/NewsletterBlock.scss';
</style>