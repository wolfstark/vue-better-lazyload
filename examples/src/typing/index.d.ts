import Vue, { VueConstructor } from 'vue';
declare const lazyloadPlugin: {
    install(Vue: VueConstructor<Vue>, options?: {}): void;
};
export default lazyloadPlugin;
