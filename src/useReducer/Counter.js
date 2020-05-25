import React, { useReducer } from 'react'
import { reducer, initialState } from './Reducer'

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='counter'>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  )
}

export default Counter