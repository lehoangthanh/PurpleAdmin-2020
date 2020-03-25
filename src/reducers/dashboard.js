const initialState = {
  isOpenMenu: false,
  routeActive: null
}
const dashboardReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'setOpenMenu': {
      return {...state, isOpenMenu: action.isOpenMenu}
    }
    case 'SET_ROUTE_ACTIVE': {
      return {...state, routeActive: action.routeActive}
    }
    default:
      return state;
  }
}
export default dashboardReducer
