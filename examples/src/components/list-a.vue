<template>
  <div class="img-list">
    <transition-group name="flip-list"
                      tag="ul">
      <li :key="img.id"
          v-for="img in list"
          @click="delMe(img)">
          <!-- <transition enter-active-class="fadeIn-enter-active" leave-active-class="fadeIn-enter-active"> -->
            <VLazyload :style="{width:'100%',height:'400px'}" class="lazy-img-fadein" height="400px">
              <img :src="img.src"
                  @error="errorHandler">
            </VLazyload>
          <!-- </transition> -->
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
