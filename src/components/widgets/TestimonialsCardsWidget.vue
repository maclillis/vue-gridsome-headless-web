<template>
    <div class="testimonials-wrap grid grid-cols-1 gap-y-10">
        <div class="testimonials-card" v-for="testimonial in cont.testimonialsCardsWidget.testimonials" :key="testimonial.id">
            <div class="testimonial-card-inner flex flex-col md:flex-row">
                <div class="testimonial-left">
                    <g-image :src="testimonial.img" class="testimonial-img" :alt="testimonial.heading" :title="testimonial.heading"></g-image>
                </div>
                <div class="testimonial-right">
                    <h4 class="testimonial-heading" v-html="testimonial.heading"></h4>
                    <p class="testimonial-membership" v-html="testimonial.membership"></p>
                    <p class="testimonial-content" v-html="testimonial.content"></p>
                    <div class="testimonial-author flex justify-end">
                        <p v-html="testimonial.author"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TestimonialsCardsWidget',
    data: function(){
        return {
            cont: this.$localeJSON
        }
    }
}
</script>

<style lang="scss">
@import '~/components/widgets/TestimonialsCardsWidget.scss';
</style>