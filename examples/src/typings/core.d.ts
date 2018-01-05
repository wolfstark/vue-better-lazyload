import Container from './container';
import VLazyLoad from './lazyload-component';
import ImageLoader from './image-loader';
export interface Options {
    retry: number;
    wait: number;
}
export default class Core {
    private static instance;
    listenerQueue: Array<VLazyLoad>;
    containerQueue: Array<Container>;
    eventList: Array<string>;
    imageLoader: ImageLoader;
    constructor(options?: Options);
    addListener(listener: VLazyLoad): void;
    addContainer(container: Container): void;
    removeListener(listener: VLazyLoad): void;
    removeContainer(listener: VLazyLoad): void;
    bindListenerHandle(node: HTMLElement | Window): void;
    removeListenerHandle(node: HTMLElement | Window): void;
    lazyLoadHandler(): void;
}
