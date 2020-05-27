import React from 'react';
// import State from './useState/App'
// import Reducer from './useReducer/App'
// import Todo from './Todo/Todo'
// import Todov2 from './Todo/Todov2'
// import NotUseMemo from './Memo/NotUseMemo'
// import UseMemo from './Memo/UseMemo'
// import UseCallback from './Memo/UseCallback'
// import TestUseMemo from './Memo/App'

import UseState from './practice/useState';
import UseReducer from './practice/useReducer';
import UseReducerSimple from './practice/useReducerSimple';
import UseReducerTodo from './practice/useReducerTodo';
import UseCallback from './practice/useCallback';
import UseCallbackEvent from './practice/useCallbackEvent';
import UseMemo from './practice/useMemo';
import NotUseMemo from './practice/notUseMemo';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <h1>React Hooks Study</h1>
      {/* <State />
      <Reducer />
      <Todo />
      <Todov2 />
      <NotUseMemo />
      <UseMemo />
      <UseCallback />
      <TestUseMemo /> */}
      <h2>useState</h2>
      <UseState initialCount={0} />
      <h2>useReducer</h2>
      <UseReducer />
      <h2>useReducerSimple</h2>
      <UseReducerSimple />
      <h2>Todo with useReducer</h2>
      <UseReducerTodo />
      <h2>useCallback</h2>
      <UseCallback />
      <h2>useCallbackEvent</h2>
      <UseCallbackEvent />
      <h2>useMemo</h2>
      <UseMemo />
      <h2>not useMemo</h2>
      <NotUseMemo />
    </div>
  );
};

export default App;