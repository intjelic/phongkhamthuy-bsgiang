<template>
  <div class="home">
    <home-header />
    <lorem-ipsum />
    <emergency-notice />
    <page-footer />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'
import LoremIpsum from '@/components/LoremIpsum.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    EmergencyNotice,
    PageFooter,
    LoremIpsum
  }
}
</script>
