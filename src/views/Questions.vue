<template>
  <div class="question">
      <page-header/>
      <div>The main content of the questions page.</div>
      <emergency-notice/>
      <page-footer/>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'Questions',
  components: {
    PageHeader,
    EmergencyNotice,
    PageFooter
  }
}
</script>
