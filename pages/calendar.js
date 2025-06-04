import Head from 'next/head'
import { useState } from 'react'
import '../styles/globals.css'

function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const days = []
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(i)
  }
  return days
}

export default function CalendarPage() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const days = generateCalendar(year, month)

  return (
    <div className="container">
      <Head>
        <title>Lịch Tháng {month + 1}/{year}</title>
      </Head>
      <h1>Lịch Tháng {month + 1}/{year}</h1>
      <input
        type="month"
        value={`${year}-${String(month + 1).padStart(2, '0')}`}
        onChange={e => {
          const [y, m] = e.target.value.split('-')
          setYear(parseInt(y))
          setMonth(parseInt(m) - 1)
        }}
      />
      <div className="calendar-grid">
        {days.map(d => (
          <div key={d} className="day">{d}</div>
        ))}
      </div>
    </div>
  )
}
