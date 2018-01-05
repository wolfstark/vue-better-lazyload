<template>
  <div class="img-list">
    <transition-group name="flip-list"
                      tag="ul">
      <li :key="img.id"
          v-for="img in list"
          @click="delMe(img)">
        <VLazyload height="400px">
          <img :src="img.src"
               @error="errorHandler"
               class="lazy-img-fadein"
               width="100%"
               height="400">
        </VLazyload>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "ListA",
  props: {
    list: Array
  },
  filters: {
    size(src) {
      console.log("src", src);
      return src;
    }
  },
  methods: {
    errorHandler(e) {
      console.log("error", e);
    },
    removeTop(e) {
      this.$emit("delete", this.list[0]);
    },
    delMe(img) {
      this.$emit("delete", img);
    }
  }
};
</script>
