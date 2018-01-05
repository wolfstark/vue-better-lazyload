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
        resolve(src)
        return
      }
      if (this.cache[src].retry > this.retry) {
        console.warn('图片重试次数超过限制')
        reject()
        return
      }
      const image = new Image()
      image.src = src

      image.onload = () => {
        this.cache[src].loaded = true
        resolve(src)
      }
      image.onerror = e => {
        reject(e)
      }
    })
  }

  mountCache (src: string) {
    if (!this.cache[src]) {
      this.cache[src] = { loaded: false, retry: 1 }
    } else {
      this.cache[src].retry += 1
    }
  }
}
