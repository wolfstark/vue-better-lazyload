import './style.less';
import Vue, { VNode } from 'vue';
import { stateEnum } from './constant';
import Container from './container';
import Core from './core';
export default class VLazyLoad extends Vue {
    state: stateEnum;
    container: Container;
    core: Core;
    lock: boolean;
    render(): VNode;
    created(): void;
    mounted(): void;
    load(): void;
    isImage(): boolean;
    beforeDestroy(): void;
}
