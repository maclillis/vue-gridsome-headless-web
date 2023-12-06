<template>
    <div class="to-top-button-wrap" v-smooth-scroll @click="scrollTop" v-show="visible">
        <div class="to-top-button flex justify-center flex-col">
            <i class="fas fa-arrow-up self-center"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToTopButton',
    data() {
        return{
            visible: false
        }
    },
    methods: {
        scrollTop: function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    scrollListener: function (e) {
        this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang="scss">
@import '~/components/partials/ToTopButton.scss';
</style>