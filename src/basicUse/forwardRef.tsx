import { useRef } from 'react';
import React from 'react';
import { useImperativeHandle } from 'react';

interface RefProps {
  name: string;
}

interface RefInst {
  myFocus: () => void;
}

// const Guang = 

const WrapedGuang = React.forwardRef<RefInst,RefProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      myFocus() {
        inputRef.current?.focus();
      }
    }
  }, [inputRef]);

  return <div>
    <span>name: { props.name }</span>
    <input ref={inputRef}></input>
  </div>
});

function App() {
  const ref = useRef<RefInst>(null);

  return (
    <div>
      <WrapedGuang ref={ref} name='demo'/>
      <button onClick={() =>ref.current?.myFocus()}>focus input</button>
    </div>
  );
}

export default App;
