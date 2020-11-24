import { useEffect, useMemo, useState } from 'react'

const oneDay = 86400 * 1000
const timerInterval = 1 * 1000
const dayLabel = 'SMTWTFS'.split('')

export function useCalendar() {
  const [currentTime, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    const timerHandle = setTimeout(
      () => setCurrentTime(Date.now()),
      timerInterval
    )
    return () => {
      clearTimeout(timerHandle)
    }
  }, [currentTime])

  const dateList = useMemo(() => {
    const currentDay = new Date(currentTime).getDay()
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(currentTime + oneDay * (i - currentDay))
      return {
        day: dayLabel[i],
        date: date,
        mDate: date.getDate(),
        isToday: currentDay === i,
      }
    })
  }, [currentTime])

  return { currentTime, dateList }
}
