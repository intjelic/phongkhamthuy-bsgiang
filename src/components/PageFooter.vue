<template>
  <div id="page-footer" class="text-white">
    <div class="container">
      <div class="row py-4">
        <div class="col-12 col-md-6 col-lg-4">
          <GmapMap
            :center="{lat: 15.991190, lng: 108.137060}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 350px; height: 350px; margin: auto;"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            />
          </GmapMap>
        </div>
        <div
          class="col-12 col-md-6 col-lg-5 my-5 d-flex flex-column justify-content-around text-center text-md-left"
        >
          <span class="h4">Dr. Giang Vet Clinic</span>
          <span class="my-3">
            131 Van Tien Dung street
            <br />Hoa Xuan, Cam Le, Da Nang, Viet Nam
            <br />Phone: +84 919 250 389
          </span>
          <span>Email: ngducgiang984@gmail.com</span>
          <span class="my-3">
            Monday, Tuesday: 8am – 7pm
            <br />Wednesday: 8am – 6pm
            <br />Thursday, Friday: 8am – 7pm
            <br />Saturday and Sunday: 8am – 7pm
          </span>
        </div>
        <div
          class="col-12 col-md-12 col-lg-3 my-5 d-flex flex-column justify-content-end text-center"
        >Logo of Pet's Way Home.</div>
      </div>
      <div class="text-center py-3">Copyright © 2020 by Nguyễn Đức Giang. All rights reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
#page-footer {
  background-color: #2f2f2f;
}
</style>
