<template>
  <div id="page-footer" class="text-white">
    <div class="container">
      <div class="row py-4">
        <div class="col-12 col-md-6 col-lg-4">
          <GmapMap
            :center="{lat:10, lng:10}"
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
          <span class="h4">Hermit Park Vets</span>
          <span class="my-3">
            223 Charters Towers Rd
            <br />Hermit Park Qld 4812
            <br />Phone: (07) 4779 5222
          </span>
          <span>Email: hermitpark@palmsvetgroup.com.au</span>
          <span class="my-3">
            Mon, Tues: 8am – 5.30pm
            <br />Wed: 8am – 6.00pm
            <br />Thurs, Fri: 8am – 5.30pm
            <br />Sat: 8.30am – 5.00pm
            <br />Sun: 10am – 12.00pm
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
