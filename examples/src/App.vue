<template>
  <v-app id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <v-toolbar color="primary">
    <v-toolbar-title class="white--text">Examples</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click.native="shuffle">洗牌</v-btn>
    </v-toolbar>
    <router-view :imgData="imgData"/>
  </v-app>
</template>
<script>
const imgList = [
  "https://cdn.gratisography.com/photos/435H.jpg",
  "https://cdn.gratisography.com/photos/436H.jpg",
  "https://cdn.gratisography.com/photos/437H.jpg",
  "https://cdn.gratisography.com/photos/438H.jpg"
  // "https://cdn.gratisography.com/photos/439H.jpg",
  // "https://cdn.gratisography.com/photos/440H.jpg",
  // "https://cdn.gratisography.com/photos/441H.jpg",
  // "https://cdn.gratisography.com/photos/442H.jpg",
  // "https://cdn.gratisography.com/photos/443H.jpg",
  // "https://cdn.gratisography.com/photos/444H.jpg",
  // "https://cdn.gratisography.com/photos/445H.jpg",
  // "https://cdn.gratisography.com/photos/446H.jpg",
  // "https://cdn.gratisography.com/photos/447H.jpg"
];
export default {
  data() {
    return {
      imgData: []
    };
  },
  methods: {
    getList(imgs) {
      return imgs.map((img, index) => ({ src: img, id: index }));
    },
    shuffle() {
      this.imgData = this.imgData.sort(() => Math.random() - 0.5);
    }
  },
  created() {
    this.imgData = this.getList(imgList);
  }
};
</script>
<style>

</style>
