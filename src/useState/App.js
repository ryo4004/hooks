import React, { useState } from 'react'

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const initialState = 0

const Counter = () => {
  const [count, setCount] = useState(initialState)

  return (
    <div className='counter'>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default App
