import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Aaa() {
    const [,setNum] = useState(1);

    const [count, setCount] = useState(2);

    useEffect(() => {
        setInterval(()=> {
            setNum(Math.random());
        }, 2000)
    },[]);

    const bbbCallback = useCallback(function () {
        // xxx
    }, []);

    const count2 = useMemo(() => {
        return count * 10;
    }, [count]);

    return <div>
      <MemoBbb  count1={count} count2={count2} callback={bbbCallback}></MemoBbb>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
} 

interface BbbProps {
    count1: number;
    count2: number;
    callback: Function
}

function Bbb(props: BbbProps) {
    console.log('bbb render');

  return <h2>{ props.count1}-{props.count2}</h2>
}

const MemoBbb = memo(Bbb);

export default Aaa;

