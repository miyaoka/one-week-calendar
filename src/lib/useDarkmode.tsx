import { useEffect, useState } from 'react'

export function useDarkmode(
  initialMode: boolean = false,
  darkClassName: string = 'dark'
) {
  const [darkmode, setDarkmode] = useState(initialMode)

  useEffect(() => {
    const classList = document.documentElement.classList
    if (darkmode) {
      classList.add(darkClassName)
    } else {
      classList.remove(darkClassName)
    }
  }, [darkmode])

  const toggleDarkmode = () => {
    setDarkmode(!darkmode)
  }

  return { toggleDarkmode }
}
