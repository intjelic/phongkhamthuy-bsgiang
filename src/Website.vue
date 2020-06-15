<template>
  <div id="website">
    <navigation-bar />
    <!-- the 'diagonal seperator' which is only shown on regular screens -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
      <polygon fill="white" points="0 0 100 0 0 10" />
    </svg>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'Website',
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
svg {
  position: absolute;
  z-index: 1;

  display: block;
  width: 100%;
  height: 70px;
}

// the 'diagonal seperator' isn't shown on small screens
@media (max-width: 992px) {
  svg {
    display: none;
  }
}
</style>
