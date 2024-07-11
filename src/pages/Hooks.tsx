import { useSize, useInterval, useHover } from '../hooks'
import { useState, useRef } from 'react'


export default function Hooks() {
  const sizeRef = useRef(null)
    const size = useSize(sizeRef)
  
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  const [count, setCount] = useState(0)

  // const updateCount = () => {
  //   setCount(count + 1)
  // }

  useInterval(() => setCount(count + 1), 1000)

  return (
    <>
      <div>
        <p> useHover hooks</p>
        <div ref={hoverRef}>hover me</div>
        {isHover && <p>isHover</p>}
      </div>
      <div>
        <p> useSize hooks</p>
        <div style={{ resize: 'both', width: '100px', height: '100px', overflow: 'auto', background: 'red' }} ref={sizeRef}>
          <p>{size?.height}</p>
          <p>{size?.width}</p>
        </div>
      </div>
      <div>
        <p>useInterval</p>
        <div>{count}</div>
      </div>
    </>
  )
}