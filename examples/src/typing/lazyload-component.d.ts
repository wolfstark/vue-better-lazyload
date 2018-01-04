import './style.less';
import Vue, { VNode } from 'vue';
import { stateEnum } from './constant';
export default class VLazyLoad extends Vue {
    state: stateEnum;
    $container: object;
    render(): VNode;
    mounted(): void;
}
