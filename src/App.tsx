import ForwardRef from './basicUse/forwardRef'
import UseContext from './basicUse/useContext'
import UseState from './basicUse/useState'
import Memo from './basicUse/memo'
import { useInterval } from './hooks/useInterval'
import { useState, useRef } from 'react'
import dayjs from 'dayjs'
import { Input, MiniCalendar, MiniCalendarRef, Calendar, Icon, createIcon, createFromIconfont, Space, Portal, MutateObserver, Watermark, Lazyload } from './components'
import { IconAdd, IconEmail } from './components/Icon/icons'

export default function App() {
  const [count, setCount] = useState(0)

  // const updateCount = () => {
  //   setCount(count + 1)
  // }

  // useInterval(updateCount, 1000)

  const [value, setValue] = useState('')

  const calendarRef = useRef<MiniCalendarRef>(null)

  const [calendarLang, setCalendarLang] = useState('zh-CN')
  function changeLang() {
    setCalendarLang(calendarLang === 'zh-CN' ? 'en-US' : 'zh-CN')
  }

  const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4443338_a2wwqhorbk4.js');
  const CustomIcon = createIcon({
    content: <path d="M694.857143 313.782857C665.014857 129.462857 594.358857 0 512.219429 0 430.08 0 359.350857 129.462857 329.435429 313.782857H694.857143zM366.006857 21.430857A512.585143 512.585143 0 0 0 39.862857 313.782857h223.085714c17.92-117.467429 52.589714-222.573714 102.985143-292.352z m618.496 292.352A513.097143 513.097143 0 0 0 658.139429 21.430857c50.322286 69.778286 85.065143 174.811429 103.204571 292.352h223.085714zM247.881143 512c0-44.324571 2.486857-88.868571 6.802286-132.096H17.773714A514.998857 514.998857 0 0 0 0 512c0 45.787429 6.582857 89.819429 17.773714 132.096h236.617143a1417.069714 1417.069714 0 0 1-6.582857-132.096z m65.974857 0c0 45.860571 2.56 89.819429 6.875429 132.096h382.537142c4.388571-42.422857 6.875429-86.308571 6.875429-132.096 0-45.714286-2.486857-89.819429-6.875429-132.096h-382.537142c-4.388571 42.276571-6.875429 86.308571-6.875429 132.096z m692.516571-132.096h-236.763428c4.388571 43.373714 6.875429 87.771429 6.875428 132.096 0 44.324571-2.56 88.868571-6.875428 132.096h236.617143c11.337143-42.422857 17.773714-86.308571 17.773714-132.096 0-45.714286-6.436571-89.819429-17.627429-132.096zM658.285714 1002.422857a513.755429 513.755429 0 0 0 326.290286-292.352h-223.158857c-18.212571 117.613714-52.736 222.72-103.131429 292.352zM39.862857 710.217143a513.097143 513.097143 0 0 0 326.363429 292.352c-50.468571-69.778286-85.138286-174.811429-103.277715-292.352H39.862857z m289.499429 0C359.350857 894.537143 430.08 1024 512.146286 1024 594.285714 1024 664.868571 894.537143 694.857143 710.217143H329.362286z" p-id="1314"></path>
  })

  const [portalShow, setPortalShow] = useState(false)

  const observerCallback = function (mutationsList: MutationRecord[]) {
    console.log(mutationsList);
  };

  const [observerState, setObserverState] = useState('aaa');
  return (
    <div className="app">
      <div>
        <Watermark content={['测试水印', '测试水印副标题']}>
          <div style={{ height: '500px' }}>
            <p> Watermark 组件</p>
            <button>切换水印显示</button>
          </div>
        </Watermark>
      </div>
      <div>
        <p> MutateObserver 组件</p>
        <button onClick={() => setObserverState(observerState === 'aaa' ? 'bbb' : 'aaa')}>change state</button>
        <MutateObserver onMutate={observerCallback}>
          <div className={observerState}>
            {
              observerState === 'aaa' ? <div>aaa</div> : <p>bbb</p>
            }
          </div>
        </MutateObserver>
      </div>
      <div>
        <p> Portal 组件</p>
        <button onClick={() => setPortalShow(true)}>show Protal</button>
        <Portal>
          {
            portalShow && <div className='modal'>
              Portal
              <button onClick={() => setPortalShow(false)}>close Protal</button>
            </div>
          }
        </Portal>
      </div>
      <div>
        <p>Space 组件</p>
        <Space split={<span>||</span>}>
          <div className='test-box'>1</div>
          <div className='test-box'>2</div>
          <div className='test-box'>3</div>
        </Space>
        <Space direction='vertical'>
          <div className='test-box'>1</div>
          <div className='test-box'>2</div>
          <div className='test-box'>3</div>
        </Space>
        <Space>
          <button>123</button>
          <div className='test-box'>2</div>
          <div className='test-box'>3</div>
        </Space>
      </div>
      <div>
        <p>Icon 组件</p>
        <IconAdd size='40px'></IconAdd>
        <IconEmail spin></IconEmail>
        <IconEmail style={{ color: 'blue', fontSize: '50px' }}></IconEmail>
        <IconFont type="icon-shouye-zhihui" size="40px"></IconFont>
        <IconFont type="icon-gerenzhongxin-zhihui" fill="blue" size="40px"></IconFont>
        <Icon>
          <path d="M1010.249143 604.013714q28.891429-115.712-2.925714-191.268571L896.731429 407.405714a402.578286 402.578286 0 0 0-41.984-97.792l74.678857-84.772571q-61.366857-102.253714-137.289143-133.12L709.851429 166.034286a402.432 402.432 0 0 0-98.742858-40.96L603.940571 13.750857q-115.712-28.891429-191.268571 2.925714l-5.193143 107.081143a402.505143 402.505143 0 0 0-97.792 38.4L231.862857 91.574857q-75.922286 30.939429-137.289143 133.12c19.529143 22.235429 57.856 47.616 60.196572 80.164572 0.585143 8.045714-36.937143 102.912-38.546286 103.058285l-99.620571 4.827429q-31.817143 75.556571-2.925715 191.268571l98.742857 6.290286a402.285714 402.285714 0 0 0 44.105143 110.08l-65.024 71.68q30.939429 75.922286 133.12 137.289143l74.166857-65.243429c33.499429 20.114286 70.217143 35.401143 109.129143 45.129143l4.754286 98.084572q75.556571 31.817143 191.268571 2.925714l6.509715-102.4a402.432 402.432 0 0 0 110.153143-47.689143l78.555428 69.193143q102.253714-61.366857 133.193143-137.289143L860.891429 713.142857c17.554286-31.670857 30.866286-65.974857 39.497142-102.180571l109.860572-6.948572zM512 749.787429a237.714286 237.714286 0 1 1 0-475.574858 237.714286 237.714286 0 0 1 0 475.574858z" p-id="1160"></path>
        </Icon>
        <CustomIcon fill="red" size="60px" />
      </div>
      <div>
        <p>Calendar 组件</p>
        <div>
          <button onClick={changeLang}>切换语言</button>
        </div>
        <Calendar
          value={dayjs('2024-06-09')}
          locale={calendarLang}
          onChange={(v) => console.log(v.format('DD/MM/YYYY'))}
          onSelect={(v) => console.log(v.format('DD/MM/YYYY'))}
          cellInnerRender={(date) => {
            return (
              <div>
                {date.format('YYYY/MM/DD')}
              </div>
            )
          }} />
      </div>
      <div>
        <p>MiniCalendar 组件</p>
        <MiniCalendar ref={calendarRef} defaultValue={new Date()} onChange={(v) => console.log('change', v.toLocaleDateString())} />
        <button onClick={() => console.log('get', calendarRef.current?.getDate().toLocaleDateString())}>获取日历时间</button>
        <button onClick={() => calendarRef.current?.setDate(new Date())}>设为此刻</button>
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
      <div>
        <p>Lazyload 组件</p>
        <Lazyload placeholder={<div>loading img ... </div>}>
          <img src="https://picsum.photos/200/300" alt="" />
        </Lazyload>
      </div>
    </div>
  )
}
