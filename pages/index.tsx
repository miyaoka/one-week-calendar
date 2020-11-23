import Head from 'next/head'
import { useCalendar } from '../lib/useCalendar'
import { useRouter } from 'next/router'

export default function Home() {
  const dateList = useCalendar()
  const { font } = useRouter().query
  const fontFamily =
    font == null ? 'Roboto' : Array.isArray(font) ? font[0] : font
  const escapedFontFamily = fontFamily.replace(/\s/g, '+')

  return (
    <>
      <Head>
        <title>One Week Calendar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${escapedFontFamily}&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <div className="container" style={{ fontFamily: `'${fontFamily}'` }}>
        <div className="week">
          {dateList.map(({ day, mDate, isToday }) => (
            <div className="date" key={mDate}>
              <div className="day">{day}</div>
              <div className="mDate">
                <span className={isToday ? 'isToday' : ''}>{mDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          align-items: center;
        }
        .week {
          width: 100%;
          display: flex;
        }
        .date {
          flex: 1;
          position: relative;
        }
        .date > div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .day {
          font-size: 20px;
          font-weight: 700;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          transform: translateY(-100%);
        }
        .mDate > span {
          font-size: 50px;
          font-weight: 700;
          padding: 10px 0;
        }
        .isToday {
          position: relative;
        }
        .isToday::before {
          content: '';
          height: 4px;
          background: #999;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          transform: translateY(100%);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow: hidden;
        }
        body {
          background: #000;
          color: #ccc;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
