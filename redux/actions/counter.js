export const increment = () => {
  console.log('Action increment');
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  console.log('Action decrement');
  return {
    type: 'DECREMENT'
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
export const setCount = (n) => {
  return {
    type: 'SET_COUNT',
    n,
  }
}