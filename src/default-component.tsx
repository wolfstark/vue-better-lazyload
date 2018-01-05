import Component from 'vue-class-component'
import Vue, { VNode } from 'vue'

@Component
export default class DefaultComponent extends Vue {
  render (): VNode {
    return <img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'/>
  }
}
