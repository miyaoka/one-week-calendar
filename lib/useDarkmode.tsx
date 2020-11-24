import { useEffect, useState } from 'react'

export function useDarkmode(
  initialMode: boolean = false,
  darkClassName: string = 'dark'
) {
  const [darkmode, setDarkmode] = useState(initialMode)

  useEffect(() => {
    const classList = document.querySelector('body')?.classList
    if (!classList) return

    if (darkmode) {
      classList.add(darkClassName)
    } else {
      classList.remove(darkClassName)
    }
  }, [darkmode])

  return { darkmode, setDarkmode }
}
