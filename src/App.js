import React from 'react'
import State from './useState/App'
import Reducer from './useReducer/App'
import Todo from './Todo/Todo'
import Todov2 from './Todo/Todov2'
import NotUseMemo from './Memo/NotUseMemo'
import UseMemo from './Memo/UseMemo'
import UseCallback from './Memo/UseCallback'
import TestUseMemo from './Memo/App'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <State />
      <Reducer />
      <Todo />
      <Todov2 />
      <NotUseMemo />
      <UseMemo />
      <UseCallback />
      <TestUseMemo />
    </div>
  );
}

export default App