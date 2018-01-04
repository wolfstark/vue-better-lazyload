import './style.less'

// import { Component, Prop } from "vue-property-decorator";
import Component from 'vue-class-component'
import Vue, { VNode } from 'vue'

import { stateEnum } from './constant'
import scrollParent from './scroll-parent'
import Core from './core'
import Container from './container'
import checkVisible from './check-visible'
// export interface ComponentInstance extends Vue {
//   $container: Window | HTMLElement;
// }
const core = new Core()
@Component({
  props: {
    height: String
  }
})
export default class VLazyLoad extends Vue {
  // @Prop(String) height:string;

  state = stateEnum.loading // loading,success,error
  container: Container

  render () {
    switch (this.state) {
      case stateEnum.loading:
        return this.$slots.loading ? (
          this.$slots.loading[0]
        ) : (
          <div style={{ height: this.$props.height }} class='lazyload-mask'>
            <div class='lazyload-spinner'>
              <svg viewBox='25 25 50 50' class='circular'>
                <circle cx='50' cy='50' r='20' fill='none' class='path' />
              </svg>
            </div>
          </div>
        )
      case stateEnum.error:
        return this.$slots.error ? this.$slots.error[0] : <div>加载失败</div>
      default:
        return this.$slots.default[0]
    }
  }
  mounted () {
    this.container = new Container(scrollParent(this.$el))
    core.addListener(this)
    core.addContainer(this.container)
    this.$nextTick(() => {
      if (checkVisible(this))this.load()
    })
  }
  load () {

  }
}
// export interface MyComponent extends Vue {
//   $container: HTMLElement|Window
//   $el:HTMLElement
//   onClick (): void
// }

// export default {
//   data() {
//     return {
//       state: stateEnum.loading,
//       $container: {}
//     };
//   },
//   props: {
//     height: String
//   },
//   mounted() {
//     this.$container = scrollParent(this.$el);
//   },
//   render() {
//     switch (this.$data.state) {
//       case stateEnum.loading:
//         return this.$slots.loading ? (
//           this.$slots.loading[0]
//         ) : (
//           <div style={{ height: this.height }} class="lazyload-mask">
//             <div class="lazyload-spinner">
//               <svg viewBox="25 25 50 50" class="circular">
//                 <circle cx="50" cy="50" r="20" fill="none" class="path" />
//               </svg>
//             </div>
//           </div>
//         );
//       case stateEnum.error:
//         return this.$slots.error ? this.$slots.error[0] : <div>加载失败</div>;
//       default:
//         return this.$slots.default[0];
//     }
//   }
// } as ComponentOptions<MyComponent>;
