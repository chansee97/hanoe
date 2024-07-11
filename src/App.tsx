import ForwardRef from './basicUse/forwardRef'
import UseContext from './basicUse/useContext'
import UseState from './basicUse/useState'
import Memo from './basicUse/memo'

export default function App() {

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

    </div>
  )
}
