export interface Cache {
    [key: string]: CacheValue;
}
export interface CacheValue {
    loaded: boolean;
    retry: number;
}
export default class ImageLoader {
    retry: number;
    cache: Cache;
    constructor(retry: number);
    load(src: string): Promise<{}>;
    preloadImage(src: string, resolve: () => void, reject: () => void): void;
    isOverLimit(src: string): boolean;
    mountCache(src: string): void;
}
