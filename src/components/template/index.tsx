import { forwardRef, CSSProperties } from 'react'
import './style.scss'
interface Props {
  style: CSSProperties,
  className: string,
}

export interface Ref {}

export const Calendar = forwardRef<Ref, Props>((props,ref) => {
  return (
    <div>
      <h1>Calendar</h1>
    </div>
  )
})
