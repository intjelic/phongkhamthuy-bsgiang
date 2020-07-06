<template>
  <div style="height: 550px;">
    <div v-if="$mq == 'desktop'">
      <div id="background">
        <div id="right-square"></div>
      </div>
      <div id="foreground" class="container">
        <img
          id="image"
          src="https://palmsvetgroup.com.au/wp-content/uploads/2015/07/slider-puppies.jpg"
        />
      </div>
    </div>
    <div v-else>
      <div class="bg-primary" style="height: 225px;"></div>
      <div class="bg-secondary" style="height: 225px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
#background {
  position: absolute;
  width: 100%;
  height: 550px;
  background-color: rgb(21, 105, 142);
}

#right-square {
  width: 50%;
  left: 50%;
  height: 550px;
  background-color: rgb(37, 170, 227);
}

#foreground {
  position: relative;
}

#image {
  width: 100%;
}
</style>
