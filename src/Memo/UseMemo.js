import React, { useState, useMemo } from 'react'
import { useFetch } from './useFetch'

const Memo = () => {
  const [count, setCount] = useState(0)

  const data = useFetch('https://app.winds-n.com/web/concert')
  // const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function calculation (arr) {
    console.log('called calclation')
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return list.reduce((a, b) => a + b, 0)
  }

  const calculated = useMemo(() => calculation(data), [data])

  return (
    <div className='counter'>
      <h2>useMemo</h2>
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
