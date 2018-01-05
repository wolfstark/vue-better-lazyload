import Container from './container';
import VLazyLoad from './lazyload-component';
import ImageLoader from './image-loader';
export default class Core {
    listenerQueue: Array<VLazyLoad>;
    containerQueue: Array<Container>;
    eventList: Array<string>;
    imageLoader: ImageLoader;
    constructor();
    addListener(listener: VLazyLoad): void;
    addContainer(container: Container): void;
    bindListenerHandle(node: HTMLElement | Window): void;
    removeListenerHandle(node: HTMLElement | Window): void;
    lazyLoadHandler(): void;
}
