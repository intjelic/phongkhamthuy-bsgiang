<template>
  <div class="d-flex border-top border-bottom">
      <div><img src="@/assets/help-circle.svg" style="margin-top: 50px;"></div>
      <div class="flex-grow-1 h5 px-5 py-3 text-center">{{ text }}</div>
      <div><img src="@/assets/help-circle.svg" style="margin-top: 50px;"></div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>

</style>
