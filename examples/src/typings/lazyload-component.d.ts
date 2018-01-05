import './style.less';
import Vue, { VNode } from 'vue';
import { stateEnum } from './constant';
import Container from './container';
export default class VLazyLoad extends Vue {
    state: stateEnum;
    container: Container;
    render(): VNode;
    mounted(): void;
    load(): void;
    isImage(): boolean;
    beforeDestroy(): void;
}
