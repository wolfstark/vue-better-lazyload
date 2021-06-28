<h1 align="center">Welcome to vue-better-lazyload 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/vue-better-lazyload" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vue-better-lazyload.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D6.0.0-blue.svg" />
  <a href="https://github.com/wolfstark/vue-better-lazyload#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/wolfstark/vue-better-lazyload/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/wolfstark/vue-better-lazyload/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/wolfstark/vue-better-lazyload" />
  </a>
  <a href="https://twitter.com/wenxi103" target="_blank">
    <img alt="Twitter: wenxi103" src="https://img.shields.io/twitter/follow/wenxi103.svg?style=social" />
  </a>
</p>

> A Vue.js plugin for lazyload your Image , Component or anything in your application

## Prerequisites

- node >=6.0.0

## Install

```sh
npm install vue-better-lazyload
// or
yarn add vue-better-lazyload
```

## Usage

```sh
// main.js
import Vue from "vue";
import App from "./App.vue";
import Lazyload from "vue-better-lazyload";
import Loading from "./components/loading.vue";
import Error from "./components/error.vue";

Vue.use(Lazyload, { loading: Loading, error: Error });

new Vue({
  el: "#app",
  render: h => h(App)
});

```

``` vue
<!-- lazy loading img -->
<template>
    <VLazyload :style="{width:'100%',height:'400px'}" class="lazy-img-fadein">
      <img :src="src"
          @error="errorHandler">
    </VLazyload>
</template>
```

``` vue
<!-- lazy loading component -->
<template>
    <VLazyload :style="{width:'100%',height:'400px'}" class="lazy-img-fadein">
      <GoodList></GoodList>
    </VLazyload>
</template>
<script>
export default {
  components:{
    GoodList:()=>@import("@/components/GoodList")
  }
}
</script>
```

## Author

👤 **wangxiang <q1038999405@gmail.com>**

* Website: https://wenxi.tech/
* Twitter: [@wenxi103](https://twitter.com/wenxi103)
* Github: [@wolfstark](https://github.com/wolfstark)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/wolfstark/vue-better-lazyload/issues). You can also take a look at the [contributing guide](https://github.com/wolfstark/vue-better-lazyload/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [wangxiang <q1038999405@gmail.com>](https://github.com/wolfstark).<br />
This project is [MIT](https://github.com/wolfstark/vue-better-lazyload/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
