import ForwardRef from './usehookk/forwardRef'
import UseContext from './usehookk/useContext'
import UseState from './usehookk/useState'
import Memo from './usehookk/memo'
import { useInterval } from './usehookk/useInterval'
import { useState } from 'react'
import { Input } from './components/Input'
import { Calendar } from './components/Calendar'

export default function App() {
  const [count, setCount] = useState(0)

  // const updateCount = () => {
  //   setCount(count + 1)
  // }

  // useInterval(updateCount, 1000)

  const [value, setValue] = useState('')

  return (
    <div className="app">
      <div>
        <p>Calendar 组件</p>
        <Calendar />
      </div>
      <div>
        <p>Input 组件</p>
        <p>受控模式</p>
        <Input
          defaultValue={''}
          onChange={(v) => console.log(v)}
        />
        <p>非受控模式</p>
        <Input
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
      <div>
        <p>UseState</p>
        <UseState />
      </div>
      <div>
        <p>ForwardRef</p>
        <ForwardRef />
      </div>
      <div>
        <p>useContext</p>
        <UseContext />
      </div>
      <div>
        <p>Memo</p>
        <Memo />
      </div>
      <div>
        <p>useInterval</p>
        <div>{count}</div>
      </div>
    </div>
  )
}
