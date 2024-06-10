import './style.scss'
import { forwardRef, useImperativeHandle } from 'react'
import { useControllableValue } from 'ahooks'

interface MiniCalendarProps {
  value?: Date
  defaultValue?: Date
  onChange?: (value: Date) => void
}

export interface MiniCalendarRef {
  getDate: () => Date
  setDate: (value: Date) => void
}
export const MiniCalendar = forwardRef<MiniCalendarRef, MiniCalendarProps>((props, ref) => {
  const weekNames = ['日', '一', '二', '三', '四', '五', '六']
  const monthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ]

  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  })

  useImperativeHandle(
    ref,
    () => {
      return {
        getDate() {
          return date
        },
        setDate(value: Date) {
          setDate(value)
        },
      }
    },
    [date]
  )

  function preMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }
  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  function getDayCount(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate()
  }

  function getBeforeDayCount(year: number, month: number) {
    return new Date(year, month, 0).getDay()
  }

  const clickHandler = (i: number) => {
    const curDate = new Date(date.getFullYear(), date.getMonth(), i)
    setDate(curDate)
  }

  function renderDays() {
    const dayCount = getDayCount(date.getFullYear(), date.getMonth())
    const beforeDayCount = getBeforeDayCount(
      date.getFullYear(),
      date.getMonth()
    )

    const days = []

    for (let i = 0; i < beforeDayCount; i++) {
      days.unshift(
        <div
          key={`empty-${i}`}
          className="calendar-days__pre"></div>
      )
    }

    for (let i = 1; i <= dayCount; i++) {
      days.push(
        <div
          key={i}
          className={`${date.getDate() === i && 'calendar-days__active'} 
            calendar-days__day`}
          onClick={() => clickHandler(i)}>
          {i}
        </div>
      )
    }

    return days
  }

  return (
    <div className="mini-calendar">
      <div className="calendar-header">
        <button onClick={preMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年{monthNames[date.getMonth()]}
          {date.getDate()}日 星期{weekNames[date.getDay()]}
        </div>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-days">
        {weekNames.map((day, index) => {
          return (
            <div
              key={index}
              className="calendar-days__week">
              {day}
            </div>
          )
        })}
        {renderDays()}
      </div>
    </div>
  )
})
