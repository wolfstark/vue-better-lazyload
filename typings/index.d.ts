import Vue, { VueConstructor } from 'vue';
export interface Options {
    retry?: number;
    wait?: number;
    error?: VueConstructor;
    loading?: VueConstructor;
    [state: number]: VueConstructor;
}
declare const lazyloadPlugin: {
    install(Vue: VueConstructor<Vue>, { retry, wait, error, loading }?: Options): void;
};
export default lazyloadPlugin;
