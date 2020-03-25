export const toggleMenu = (isOpenMenu) => {
  return {
    type: 'setOpenMenu',
    isOpenMenu: !isOpenMenu
  }
}