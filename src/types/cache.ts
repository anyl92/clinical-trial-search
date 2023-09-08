export interface LocalCache<T> {
  data: T[]
  expireTime: number
}