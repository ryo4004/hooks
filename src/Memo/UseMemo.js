import React, { useState, useMemo } from 'react'
import { useFetch } from './useFetch'

const Memo = () => {
  const [count, setCount] = useState(0)

  const data = 'samplesamplesamplesamplesamplesample'

  function calculation (arr) {
    console.log('called calclation')
    return arr.length
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
