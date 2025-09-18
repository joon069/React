import { useState } from 'react'

function Count() {
  let cnt = 0;
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Count</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>+++++++</button>
        <button onClick={() => setCount((count) => count - 1)}>------</button>
        <h2>{cnt}</h2>
        <button onClick={() => console.log(cnt++)}>+</button>
        <button onClick={() => console.log(cnt--)}>-</button>
      </div>
    </>
  );
}

export default Count;