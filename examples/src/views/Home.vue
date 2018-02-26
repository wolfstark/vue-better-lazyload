<template>
  <v-container fluid grid-list-md>
    <transition-group name="flip-list" class="layout row wrap">
      <v-flex
        xs6
        :key="imgItem.id"
        v-for="imgItem of imgData"
      >
        <v-card hover>
          <v-lazyload height="300px">
            <img
              :src="imgItem.src"
              height="300px"
            />
          </v-lazyload>
        </v-card>
      </v-flex>
    </transition-group>
  </v-container>
</template>
<script>
export default {
  name: "home",
  props: {
    imgData: Array
  }
};
</script>
<style module lang="stylus">
.img {
  width: 500px;
}

:global(.flip-list-move) {
  transition: transform 1s;
}
</style>
