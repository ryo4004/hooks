import React, { useState, useCallback } from 'react';

const Callback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log('[useCallbackEvent] increment');
    setCount(prev => prev + 1);
  }, []);

  console.log('[useCallbackEvent] render');

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Callback;