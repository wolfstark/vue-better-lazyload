import VLazyLoad from './lazyload-component';
import Container from './container';
export default class Core {
    listenerQueue: Array<VLazyLoad>;
    containerQueue: Array<Container>;
}
