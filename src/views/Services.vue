<template>
  <div class="services">
    <page-header />
    <lorem-ipsum />
    <emergency-notice />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'
import LoremIpsum from '@/components/LoremIpsum.vue'

export default {
  name: 'Services',
  components: {
    PageHeader,
    EmergencyNotice,
    PageFooter,
    LoremIpsum
  }
}
</script>
