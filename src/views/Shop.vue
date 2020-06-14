<template>
  <div class="shop">
      <page-header/>
      <div>The main content of the shop page.</div>
      <emergency-notice/>
      <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'Shop',
  components: {
    PageHeader,
    EmergencyNotice,
    PageFooter
  }
}
</script>
