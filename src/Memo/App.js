import React, { useState, useMemo } from 'react'
import { useFetch } from './useFetch'

const App = () => {
  const [count, setCount] = useState(0)

  const { data } = useFetch('https://app.winds-n.com/web/concert')

  function computeLongestWord (arr) {
    if (!arr) return []
    console.log('calc')
    let longestWord = ''
    arr.list.forEach(item => {
      if (item.id.length > longestWord.length) {longestWord = item.id}
    })
    return longestWord
  }

  const computeWord = useMemo(() => computeLongestWord(data), [data])

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{computeWord}</div>
    </div>
  )
}

export default App