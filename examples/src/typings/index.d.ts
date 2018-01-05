import Vue, { VueConstructor } from 'vue';
declare const lazyloadPlugin: {
    install(Vue: VueConstructor<Vue>, options?: {
        retry: number;
        wait: number;
    }): void;
};
export default lazyloadPlugin;
