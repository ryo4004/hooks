import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.value
      }
    case 'add':
      return {
        ...state,
        input: '',
        items: [
          ...state.items,
          {
            id: state.items.length,
            value: action.value
          }
        ]
      }
    case 'remove':
      return {
        ...state,
        items: state.items.filter((v, index) => index !== action.id)
      }
    default:
      return state
  }
}

const initialState = {
  input: '',
  items: []
}

const Todov2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {input, items} = state

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({type: 'add', value: input})
  }

  console.log('run render')

  return (
    <>
      <h2>Todo with useReducer v2</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => dispatch({type: 'input', value: e.target.value})} />
      </form>
      <button onClick={() => dispatch({type: 'clear'})}>Clear</button>
      <button onClick={() => dispatch({type: 'nothing'})}>nothing</button>
      <ul>
        {items.map((item, index) => {
          return <li key={item.id}>{item.value} <button onClick={() => dispatch({type: 'remove', id: index})}>x</button></li>
        })}
      </ul>
    </>
  )
}

export default Todov2