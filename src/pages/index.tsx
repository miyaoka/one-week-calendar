import Head from 'next/head'
import { useCalendar } from '../lib/useCalendar'
import { useState, useMemo, useEffect } from 'react'
import { useDarkmode } from '../lib/useDarkmode'

export default function Home() {
  const { currentTime, dateList } = useCalendar()
  const [fontFamily, setFontFamily] = useState('Lora')
  const { toggleDarkmode } = useDarkmode(true)
  const escapedFontFamily = useMemo(() => fontFamily.replace(/\s/g, '+'), [
    fontFamily,
  ])

  function openFontFamilyConfig(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.stopPropagation()

    const font = prompt('Enter Google Font name', fontFamily)
    if (font != null) setFontFamily(font)
  }

  const [dayVal, setDayVal] = useState<number | null>(null)

  const now = new Date(currentTime)
  useEffect(() => {
    setDayVal((now.getHours() + now.getMinutes() / 60) / 24)
  }, [])

  return (
    <>
      <Head>
        <link
          href={`https://fonts.googleapis.com/css2?family=${escapedFontFamily}&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <div
        className="flex h-screen items-center"
        style={{ fontFamily: `'${fontFamily}'` }}
        onClick={toggleDarkmode}
      >
        {dayVal && (
          <>
            <div className="flex w-full">
              {dateList.map(({ day, mDate, isToday }) => (
                <div className="flex-1 relative" key={mDate}>
                  <div className="flex justify-center items-center absolute top-0 left-0 right-0 transform -translate-y-full font-bold text-[3vw] ">
                    {day}
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="text-[10vw] py-2 font-bold">{mDate}</span>
                    {isToday ? (
                      <div className="absolute bottom-0 left-0 right-0 transform translate-y-full h-[0.5vw]  bg-gray-700 dark:bg-gray-300">
                        <div
                          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[2vw] w-[1vw]  bg-gray-700 dark:bg-gray-300 "
                          style={{ left: `${dayVal * 100}%` }}
                        ></div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="fixed bottom-0 left-0 right-0 text-gray-200 dark:text-gray-800">
              {now
                .toLocaleDateString('ja', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
                .slice(-5)}
            </div>
          </>
        )}

        <div
          className="fixed bottom-0 right-0 w-16 h-16"
          onClick={openFontFamilyConfig}
        ></div>
      </div>
    </>
  )
}
