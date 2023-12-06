<template>
    <div id="nav-mobile-wrap" ontouchstart>
        <div class="nav-mobile-overlay-inner flex flex-col" >
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'NavMobileOverlay',
  mounted() {
  }
}
</script>
<style lang="scss">
@import '~/components/navigation/NavMobileOverlay.scss';
</style>