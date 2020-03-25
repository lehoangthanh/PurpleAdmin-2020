import {
  deviceListFilter,
  SET_DEVICE_LIST_FILTER
} from '../actions/Devices';

const initialState = {
  listFilter: deviceListFilter.SHOW_ALL,
  devices: []
}

const DeviceReducer = (state = {}, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'SEARCH_FILTER_SUCCESS': {
      console.log('==REDUCER===fetchList==',action)
      return {...state, devices: action};
      // return Object.assign({}, state, {
      //   devices: action.devices
      // })
    }
    default:
      return state;
  }
}
export default DeviceReducer;
