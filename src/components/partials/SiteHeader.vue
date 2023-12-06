<template>  
    <header class="header flex justify-around items-center md:h-76">
        <div class="inner flex flex-row justify-between self-center">
            <NavMobile/>
            <NavDesktop/>
        </div>
    </header>
</template>

<script>
import NavDesktop from '~/components/navigation/NavDesktop.vue';
import NavMobile from '~/components/navigation/NavMobile.vue';

export default {
  name: 'SiteHeader',
  components : {
      NavDesktop,
      NavMobile
  }
}
</script>

<style lang="scss">
@import '~/components/partials/SiteHeader.scss';
</style>