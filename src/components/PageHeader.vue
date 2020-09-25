<template>
  <div class="bg-primary" style="height: 200px;">
    <div v-if="$mq == 'desktop'" class="pb-4 px-4 container h-100 d-flex justify-content-end align-items-end">
      <div class="text-white text-right">
        <div class="h2">{{ title }}</div>
        <div class="h5">{{ description }}</div>
      </div>
    </div>
    <div v-else class="container h-100 d-flex justify-content-center align-items-center">
      <div class="text-white text-center">
        <div class="h2">{{ title }}</div>
        <div class="h5">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title', 'description']
}
</script>
