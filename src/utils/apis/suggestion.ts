import { instance } from './instance'
import { CacheRepository } from '../store/CacheRepository'
import { SickResponseObj } from '../../types/api'


export type GetSuggestionResponse = SickResponseObj[]

const cacheRepository = new CacheRepository<SickResponseObj>()

const getSuggestion = async (searchTerm: string) => {
  const cache = cacheRepository.get(searchTerm)

  if (cache && cache.expireTime > Date.now()) {
    return cache.data
  } else {
    const { data } = await instance.get<GetSuggestionResponse>('sick', { q: searchTerm })
    cacheRepository.set(searchTerm, data)

    return data
  }
}

export const suggestionAPI = { get: getSuggestion }
