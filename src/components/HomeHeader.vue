<template>
  <div>
    <div class="row" style="height: 550px;">
      <img
        id="image"
        src="https://palmsvetgroup.com.au/wp-content/uploads/2015/07/slider-puppies.jpg"
      />
      <div id="left-side" class="col-6">Left</div>
      <div id="right-side" class="col-6">Right</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
#image {
  position: absolute;
  z-index: 1;

  width: 1200px;
  left: 400px;
}

#left-side {
  background-color: #ff7b00;
}

#right-side {
  background-color: #ffa600;
}
</style>
