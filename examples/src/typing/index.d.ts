export interface Vue {
    component: (name: string, component: object) => void;
}
declare const lazyloadPlugin: {
    install(Vue: Vue, options?: {}): void;
};
export default lazyloadPlugin;
