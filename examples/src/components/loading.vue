<template>
  <div class='lazyload-mask'>
    <div class='lazyload-spinner'>
      <svg viewBox='25 25 50 50' class='circular'>
        <circle cx='50' cy='50' r='20' fill='none' class='path' />
      </svg>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.lazyload-mask {
  position: relative;
  z-index: 1;
  background-color: hsla(0, 0%, 100%, 0.9);
  margin: 0;
  transition: opacity 0.3s;
  line-height: 1;
  font-size: 0;
  .lazyload-spinner {
    top: 50%;
    margin-top: -0.42rem;
    width: 100%;
    text-align: center;
    position: absolute;
    .circular {
      height: 0.84rem;
      width: 0.84rem;
      animation: loading-rotate 2s linear infinite;
      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 3;
        stroke: #409eff;
        stroke-linecap: round;
      }
    }
  }
}
@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -0.8rem;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -2.4rem;
  }
}
</style>
