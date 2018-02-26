<template>
  <div class="home">
    <img :key="imgItem.id" v-for="imgItem of imgData" :src="imgItem.src">
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    imgData: Array
  }
};
</script>
