<template>
  <div id="emergency-notice">
    <div class="container text-center py-4">
      <span class="text-primary h1">{{ $t("emergencyNotice.text") }}</span>
      <span class="text-white h1 ml-4">{{ $t("emergencyNotice.phoneNumber") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmergencyNotice'
}
</script>

<style lang="scss" scoped>
#emergency-notice {
  background-color: rgb(37, 170, 227);
}
</style>
