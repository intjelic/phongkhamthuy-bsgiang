<template>
  <div class="home">
      <home-header/>
      <div>The main content of the home page.</div>
      <emergency-notice/>
      <page-footer/>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    EmergencyNotice,
    PageFooter
  }
}
</script>
