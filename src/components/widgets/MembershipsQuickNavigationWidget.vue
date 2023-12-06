<template>
  <article class="membership-quicks-block-wrap flex flex-col">

    <div class="membership-quicks-block-inner">

      <h4 class="under-title">{{ cont.membershipsQuickNavigationWidget.underTitle }}</h4>
      <div class="quick-grid grid grid-cols-1 gap-y-6 md:gap-x-6 md:gap-y-4 md:grid-cols-3 lg:grid-cols-4 flex flex-col">
          <div class="quick-col flex flex-col" v-for="quick in cont.membershipsQuickNavigationWidget.quicks" :key="quick.id">
            <g-link :to="quick.link" class="flex flex-col justify-center quick-link">
              <div class="quick-bg" v-bind:style="bgImage(quick.bgImg)"></div>
              <div class="quick-ovly"></div>
              <h4 class="quick-title flex flex-col self-center" v-html="quick.title"></h4>
            </g-link>
          </div>
      </div>
        
    </div>

  </article>
</template>
<script>
export default {
  name: 'MembershipsQuickNavigationWidget',
  methods: {
      bgImage: function(image){
        return 'background-image: url("' + image + '");background-size:cover;';
      }
  },
    data: function(){
    return {
      isActive: false,
      currentPage: false,
      cont: this.$localeJSON,
    }
  }
}
</script>

<style lang="scss">
@import '~/components/widgets/MembershipsQuickNavigationWidget.scss';
</style>