const initialState = {
  loadingBar: null
}
const loadingBarReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'initLoadingBar': {
      return {...state, loadingBar: action.loadingBar};
    }
    default:
      return state;
  }

}
export default loadingBarReducer
