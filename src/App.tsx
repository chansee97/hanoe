import ForwardRef from './usehookk/forwardRef'
import UseContext from './usehookk/useContext'
import UseState from './usehookk/useState'
import Memo from './usehookk/memo'
import { useInterval } from './usehookk/useInterval'
import { useState } from 'react'
import { Test } from './components/test'

export default function App() {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(count + 1)
  }

  useInterval(updateCount, 1000)

  const [value, setValue] = useState('')

  return (
    <div className="app">
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
      <div>
        <p>受控模式</p>
        <Test defaultValue={''} onChange={(v) => console.log(v)} />
        <p>非受控模式</p>
        <Test value={value} onChange={(v) => setValue(v)}/>
      </div>
    </div>
  )
}