import { LocalCache } from "../../types/cache"


const MINUTES_IN_MILLISECONDS = 60000
const EXPIRE_TIME = MINUTES_IN_MILLISECONDS * 1

export class CacheRepository<T> {
  #cache: Record<string, LocalCache<T>> = {}

  set(key: string, value: T[]) {
    this.#cache[key] = {
      data: value,
      expireTime: Date.now() + EXPIRE_TIME,
    }
  }

  get(key: string) {
    return this.#cache[key]
  }
}
