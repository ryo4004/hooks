import React from 'react'
import State from './useState/App'
import Reducer from './useReducer/App'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <State />
      <Reducer />
    </div>
  );
}

export default App