<template>
  <div class="img-list"
       ref="box">
    <li :key="index" v-for="(img,index) in list"
        @click="delMe(img)">
      <lazy-component @show="tip">
        <img class="mini-cover"
             :src="img.src"
             width="100%"
             height="400">
      </lazy-component>
    </li>
  </div>
</template>
<script>
export default {
  name: "ListC",
  props: {
    list: Array
  },
  methods: {
    tip(context) {
      console.log(context);
    },
    delMe(img) {
      this.$emit("delete", img);
    }
  }
};
</script>
<style>
.mini-cover {
  width: 50px;
  height: 50px;
}
</style>
