import VLazyLoad from './lazyload-component';
import Container from './container';
export default class Core {
    listenerQueue: Array<VLazyLoad>;
    containerQueue: Array<Container>;
    eventList: Array<string>;
    addListener(listener: VLazyLoad): void;
    addContainer(container: Container): void;
    bindListenerHandle(node: HTMLElement | Window): void;
    removeListenerHandle(node: HTMLElement | Window): void;
    lazyLoadHandler(): void;
}
