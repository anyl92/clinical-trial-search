import { useEffect, useState } from 'react'

import { suggestionAPI } from '../utils/apis/suggestion'
import { SickResponseObj } from '../types/api'

const useSuggestions = (keyword: string) => {
  const [suggestions, setSuggestions] = useState<SickResponseObj[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (keyword !== '') {
      setLoading(true)
      suggestionAPI
        .get(keyword)
        .then((data) => {
          setSuggestions(data)
        })
        .catch(() => setError(true))
        .finally(() => {
          setLoading(false)
        })
    } else {
      setSuggestions([])
    }
  }, [keyword])

  return { suggestions, loading, error }
}

export default useSuggestions
