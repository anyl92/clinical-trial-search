import { useEffect, useState } from 'react'

const useKeyboardNavigation = <T>(dataArr: T[]) => {
  const [currentIndex, setCurrentIndex] = useState(-1)

  const endIndex = dataArr.length
  const isEndIndex = currentIndex === endIndex

  const moveToPrev = (e: React.KeyboardEvent) => {
    if (currentIndex >= 0) {
      e.preventDefault()
    }
    setCurrentIndex((prev) => Math.max(prev - 1, -1))
  }

  const moveToNext = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && isEndIndex) {
      closeAndReset()
    } else {
      e.preventDefault()
      setCurrentIndex((prev) => Math.min(prev + 1, endIndex))
    }
  }

  const closeAndReset = () => {
    setCurrentIndex(-1)
  }

  const changeIndexByKeyDown = (e: React.KeyboardEvent) => {
    if (!e.nativeEvent.isComposing) {
      if (e.key === 'ArrowUp' || (e.shiftKey && e.key === 'Tab')) {
        moveToPrev(e)
      } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
        moveToNext(e)
      } else if (e.key === 'Escape') {
        closeAndReset()
      }
    }
  }

  changeIndexByKeyDown.setIndex = (idx: number) => {
    setCurrentIndex(idx)
  }

  useEffect(() => {
    changeIndexByKeyDown.setIndex(0)
  }, [dataArr])

  return { currentIndex, changeIndexByKeyDown }
}

export default useKeyboardNavigation
