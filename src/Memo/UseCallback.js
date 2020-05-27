import React, { useState, useCallback } from 'react'

const Memo = () => {
  const [count, setCount] = useState(0)

  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function calculation (arr) {
    if (!arr) return false
    console.log('called calclation')
    return arr.reduce((a, b) => a + b, 0)
  }

  const calculated = useCallback(calculation(data), [data, calculation])

  return (
    <div className='counter'>
      <h2>useCallback</h2>
      <span>Count: {count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        calculated: {calculated}
      </div>
    </div>
  )
}

export default Memo
