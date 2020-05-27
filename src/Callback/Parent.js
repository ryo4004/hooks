import React, { useState, useCallback } from 'react';
import Child from './Child';

// sample from https://ja.reactjs.org/docs/hooks-reference.html#functional-updates
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);

  // const array = useMemo(() => {
  //   return [0, 1, 2, 3, 4, 5];
  // }, []);

  const array = useCallback(() => {
    return [0, 1, 2, 3, 4, 5];
  }, []);

  // const array = [0, 1, 2, 3, 4, 5];

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <Child array={array} />
    </>
  );
}
// sample end

export default Counter;