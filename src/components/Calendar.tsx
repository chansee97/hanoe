import './Calendar.css'

export function Calendar() {
  const currentDate = new Date().getDate()
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDay()

  const dayNumber = new Date(currentYear, currentMonth + 1, 0).getDate()
  const dayList = Array.from({ length: dayNumber }, (_, index) => index + 1)

  const weekName = [ '一', '二', '三', '四', '五', '六','日']

  const preMonthDayNumber = new Date(currentYear, currentMonth, 0).getDate()
  const preMonthEndDay = new Date(currentYear, currentMonth, 0).getDay()
  const preMonthDayList = Array.from({ length: preMonthEndDay }, (_, index) => preMonthDayNumber - preMonthEndDay + index + 1)
  
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <button>&lt;</button>
        <div>
          {currentYear} 年 {currentMonth + 1} 月 {currentDate}日 星期
          {currentDay}
        </div>
        <button>&gt;</button>
      </div>
      <div className='calendar-days'>
        {weekName.map((day, index) => {
          return <div key={index} className='calendar-days__week'>{day}</div>
        })}
        {preMonthDayList.map((day, index) => {
          return <div key={index} className='calendar-days__pre'>{day}</div>
        })}
        {dayList.map((day, index) => {
          return <div key={index} className={`${currentDate === day ? 'calendar-days__active' : ''}`}>{day}</div>
        })}
      </div>
    </div>
  )
}
