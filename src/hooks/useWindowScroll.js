import { useState } from "react"

export function useWindowScroll () {
  const [y, setY] = useState(0)
  // 在滚动行为发生时 不断获取滚动值 然后交给y
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    setY(h)
  })
  return [y]
}