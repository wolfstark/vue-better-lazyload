import Vue, { VueConstructor, VNode } from 'vue'

export default Vue.extend({
  mounted () {
    console.log(3)
  },
  render (): VNode {
    return <div>{this.$slots.default}</div>
  }
})
