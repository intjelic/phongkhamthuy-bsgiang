<template>
  <div class="shop">
    <page-header
      :title="$t('navigationBar.shop')"
      :description="$t('pageHeaders.descriptions.shop')"
    />
    <div class="container">
      <br>
      <page-introduction class="my-4 w-75 mx-auto" :text="$t('shopPage.introduction')"/>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="px-3 text-danger h5 text-center">
        Sorry! This page is still under development and this page isn't completed yet. Please come back later.
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
    <emergency-notice />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageIntroduction from '@/components/PageIntroduction.vue'
import EmergencyNotice from '@/components/EmergencyNotice.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  name: 'Shop',
  components: {
    PageHeader,
    PageIntroduction,
    EmergencyNotice,
    PageFooter
  }
}
</script>
