const counter = (state = {
  count: 0
}, action) => {
  console.log('Reducer counter');
  switch(action.type) {
    case 'INCREMENT':
      console.log('Increment');
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      console.log('Decrement');
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET_COUNT':
      return {
        count: action.n
      }
    default:
      return state;
  }
}

export default counter;