<template>
  <div style="height: 450px;">
    <div v-if="$mq == 'desktop'">
      <div id="background">
        <div id="right-square"></div>
      </div>
      <div id="foreground" class="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://palmsvetgroup.com.au/wp-content/uploads/2015/07/slider-puppies.jpg" class="d-block w-100" height="350px" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://palmsvetgroup.com.au/wp-content/uploads/2015/07/slider-puppies.jpg" class="d-block w-100" height="350px" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://palmsvetgroup.com.au/wp-content/uploads/2015/07/slider-puppies.jpg" class="d-block w-100" height="350px" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="bg-primary" style="height: 225px;">
        Left
      </div>
      <div class="bg-secondary" style="height: 225px;">
        Right
      </div>
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
  height: 450px;
  background-color: rgb(21, 105, 142);
}

#right-square {
  width: 50%;
  left: 50%;
  height: 450px;
  background-color: rgb(37, 170, 227);
}

#foreground {
  position: relative;
}

#image {
  width: 100%;
}
</style>
