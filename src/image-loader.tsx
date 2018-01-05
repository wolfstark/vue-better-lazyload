export interface Cache {
  [key: string]: CacheValue
}

export interface CacheValue {
  loaded: boolean
  retry: number
}

export default class ImageLoader {
  retry: number
  cache: Cache = Object.create(null)

  constructor (retry: number) {
    this.retry = retry
  }

  load (src: string) {
    this.mountCache(src)

    return new Promise((resolve, reject) => {
      if (this.cache[src].loaded) {
        resolve()
        return
      }

      this.preloadImage(src,resolve,reject)
    })
  }

  preloadImage (src: string, resolve: () => void, reject: () => void) {
    if (this.isOverLimit(src)) {
      reject()
      return
    }

    const image = new Image()
    image.src = src
    this.cache[src].retry += 1

    image.onload = () => {
      this.cache[src].loaded = true
      resolve()
    }
    image.onerror = () => {
      this.preloadImage(src,resolve,reject)
    }
  }

  isOverLimit (src: string) {
    if (this.cache[src].retry >= this.retry) {
      console.warn('图片重试次数超过限制')
      return true
    }
    return false
  }

  mountCache (src: string) {
    if (!this.cache[src]) {
      this.cache[src] = { loaded: false, retry: 0 }
    }
  }
}
