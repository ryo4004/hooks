export const initialState = {
  count: 0
}

export const reducer = (state, action) => {
  console.log('reducer', {state, action})
  switch (action.type) {
    case 'reset':
      return {count: initialState.count}
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      return new Error()
  }
}