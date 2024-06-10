import {
  forwardRef,
  CSSProperties,
  ReactNode,
  useContext,
  useState,
} from 'react'
import './style.scss'
import dayjs, { Dayjs } from 'dayjs'
import cs from 'classnames'
import allLocales from './locale'
import LocaleContext from './LocaleContext'

interface CalendarProps {
  value: Dayjs
  style?: CSSProperties
  className?: string | string[]
  onSelect?: (date: Dayjs) => void
  onChange?: (date: Dayjs) => void
  locale?: string

  // 定制日期显示，会完全覆盖日期单元格
  cellRender?: (date: Dayjs) => ReactNode
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  cellInnerRender?: (date: Dayjs) => ReactNode
}

export interface CalendarRef { }

interface DayInfo {
  date: Dayjs
  isCurrentMonth: boolean
  isSelected: boolean
}

function CalendarHeader() {
  const { locale } = useContext(LocaleContext)

  const weekList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  const CalendarLocale = allLocales[locale]

  return (
    <div className="calendar-body-header">
      {weekList.map((item, index) => {
        return (
          <div
            className="calendar-header-item"
            key={index}>
            {CalendarLocale.week[item]}
          </div>
        )
      })}
    </div>
  )
}

function getAllDays(curDay: Dayjs, date: Dayjs) {
  const startDate = date.startOf('month')
  // 当前月份的开始星期
  const day = startDate.day()

  const daysInfo: DayInfo[] = new Array(6 * 7)

  for (let i = 0; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day')
    daysInfo[i] = {
      date: calcDate,
      isCurrentMonth: calcDate.month() === date.month(),
      isSelected: curDay.isSame(calcDate, 'date'),
    }
  }

  return daysInfo
}

interface CalendarBodyProps extends CalendarProps {
  curMonth: Dayjs
  selectHandler: (date: Dayjs) => void
}

function RenderDay(props: CalendarBodyProps) {
  const { value, curMonth, selectHandler, cellRender, cellInnerRender } = props

  const dayInfo = getAllDays(value, curMonth)

  return (
    <div className="calendar-body">
      {dayInfo.map((item, index) => {
        return (
          <div
            className={`calendar-body-item ${item.isCurrentMonth ? '' : 'other-month'
              }`}
            key={index}
            onClick={() => selectHandler(item.date)}
          >
            {cellRender
              ? cellRender(item.date)
              : (
                <div
                  className={`${item.isSelected ? 'calendar-body-item-selected' : ''
                    }`}>
                  <div className="number">{item.date.date()}</div>
                  <div>{cellInnerRender?.(item.date)}</div>
                </div>
              )}
          </div>
        )
      })}
    </div>
  )
}

interface CalendarHeaderProps extends CalendarProps {
  curMonth: Dayjs
  todayHandler: () => void
  selectHandler: (date: Dayjs) => void
}
function Header(props: CalendarHeaderProps) {
  const { curMonth, selectHandler, todayHandler } = props

  const localeContext = useContext(LocaleContext);
  const { formatMonth, today } = allLocales[localeContext.locale];

  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <button className="calendar-header-icon" onClick={() => selectHandler(curMonth.add(-1, 'month'))}>&lt;</button>
        <div className="calendar-header-value">{curMonth.format(formatMonth)}</div>
        <button className="calendar-header-icon" onClick={() => selectHandler(curMonth.add(1, 'month'))}>&gt;</button>
        <button className="calendar-header-btn" onClick={todayHandler}>{today}</button>
      </div>
    </div>
  )
}

export const Calendar = forwardRef<CalendarRef, CalendarProps>((props, ref) => {
  const { value, style, className, locale, onChange, onSelect } = props

  const [curValue, setCurValue] = useState<Dayjs>(value);

  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  function selectHandler(date: Dayjs) {
    changeDate(date)
    onSelect?.(date)
  }

  function todayHandler() {
    const date = dayjs();
    changeDate(date)
  }

  function changeDate(date: Dayjs){
    setCurValue(date)
    setCurMonth(date);
    onChange?.(date)
  }

  const classNames = cs('calendar', className)
  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div
        className={classNames}
        style={style}>
        <Header value={curValue} curMonth={curMonth} selectHandler={setCurMonth} todayHandler={todayHandler } />
        <CalendarHeader />
        <RenderDay {...props} value={curValue} curMonth={curMonth} selectHandler={selectHandler} />
      </div>
    </LocaleContext.Provider>
  )
})
