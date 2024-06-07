import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);

  return (
    <button onClick={() => setNum(num + 1)}>{num}</button>
  );
}

export default App;
