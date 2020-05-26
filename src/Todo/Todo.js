import React, { useState, useReducer } from 'react'

const Todo = () => {
  const [input, setInput] = useState('')
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            value: action.value
          }
        ]
      case 'remove':
        return state.filter((v, index) => index !== action.id)
      case 'clear':
        return []
      default:
        return state
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({type: 'add', value: input})
    setInput('')
  }

  return (
    <>
      <h2>Todo with useReducer</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
      </form>
      <button onClick={() => dispatch({type: 'clear'})}>Clear</button>
      <ul>
        {items.map((item, index) => {
          return <li key={item.id}>{item.value} <button onClick={() => dispatch({type: 'remove', id: index})}>x</button></li>
        })}
      </ul>
    </>
  )
}

export default Todo