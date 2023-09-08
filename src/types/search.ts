import { SickResponseObj } from "./api"

export interface SearchSuggestionProps {
  keyword: string
  selectIndex: number
  suggestions: SickResponseObj[]
  loading: boolean
  error: boolean
}

export interface SearchFormProps {
  getInput: (vlaue: string) => void
  keyword: string
  changeIndexByKeyDown: {
    (e: React.KeyboardEvent): void
    setIndex(idx: number): void
  }
  isOpen: boolean
}
