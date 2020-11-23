import Head from 'next/head'
import { useCalendar } from '../lib/useCalendar'

export default function Home() {
  const calendar = useCalendar()

  const dayList = calendar.map(({ day }) => day)
  const mDateList = calendar.map(({ mDate }) => mDate)
  const isTodayList = calendar.map(({ isToday }) => isToday)

  return (
    <>
      <Head>
        <title>One Week Calendar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <table className="week">
          <tr className="day">
            {dayList.map((day) => (
              <td>{day}</td>
            ))}
          </tr>
          <tr className="mDate">
            {mDateList.map((mDate) => (
              <td>{mDate}</td>
            ))}
          </tr>
          <tr className="isToday">
            {isTodayList.map((isToday) => (
              <td className={isToday ? 'today' : ''}></td>
            ))}
          </tr>
        </table>
      </div>

      <style jsx>{`
        .container {
          background: #000;
          color: #ccc;
          font-family: 'Roboto', sans-serif;
          display: flex;
          height: 100vh;
          align-items: center;
        }
        .week {
          width: 100%;
        }
        .day {
          height: 50px;
        }
        .mDate {
          height: 100px;
        }
        .isToday {
          height: 5px;
        }
        td {
          text-align: center;
        }
        .day td {
          font-size: 20px;
          font-weight: 700;
        }
        .mDate td {
          font-size: 50px;
          font-weight: 700;
        }
        .today {
          background: #999;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
