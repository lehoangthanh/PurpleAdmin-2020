const initialState = {
  isOpenMenu: false
}
const dashboardReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'setOpenMenu': {
      return {...state, isOpenMenu: action.isOpenMenu}
    }
    default:
      return state;
  }
}
export default dashboardReducer
