<template>
  <div class="layout flex flex-col justify-between">
      <!--Header -->
      <SiteHeader/>

      <!-- Content -->
      <slot/>
      
      <!-- Footer -->
      <SiteFooter/>

      <ToTopButton/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteHeader from '~/components/partials/SiteHeader.vue';
import SiteFooter from '~/components/partials/SiteFooter.vue';
import ToTopButton  from '~/components/partials/ToTopButton.vue';

export default {
  components: {
    SiteHeader,
    SiteFooter,
    ToTopButton
  }
}
</script>

<style lang="scss">
@import '~/layouts/Default.scss';
</style>
