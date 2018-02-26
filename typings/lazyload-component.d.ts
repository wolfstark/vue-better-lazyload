import Vue, { VNode } from 'vue';
import { stateEnum } from './constant';
import Container from './container';
import Core from './core';
export default class VLazyLoad extends Vue {
    state: stateEnum;
    container: Container;
    core: Core;
    lock: boolean;
    created(): void;
    mounted(): void;
    render(): VNode;
    getStateComponent(state: stateEnum): VNode;
    load(): void;
    isImage(): boolean;
    showToState(show: boolean): stateEnum.loading | stateEnum.loaded;
    beforeDestroy(): void;
}
