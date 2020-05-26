import React from 'react'
import State from './useState/App'
import Reducer from './useReducer/App'
import Todo from './Todo/Todo'
import Todov2 from './Todo/Todov2'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <State />
      <Reducer />
      <Todo />
      <Todov2 />
    </div>
  );
}

export default App