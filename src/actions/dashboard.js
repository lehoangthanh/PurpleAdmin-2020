export const toggleMenu = (isOpenMenu) => {
  return {
    type: 'setOpenMenu',
    isOpenMenu: !isOpenMenu
  }
}

export const setRouteActive = (route) => {
  return {
    type: 'SET_ROUTE_ACTIVE',
    routeActive: route
  }
}