const initialState = {
    num: 0
}

const Counter = (state = {}, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
      case 'INCREMENT': {
        return state.num + 1;
      }
      case 'DECREMENT': {
        return state.num - 1;
      }
      default:
        return state;
    }
}
export default Counter;
