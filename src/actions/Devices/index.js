import axios from 'axios';
export const SET_DEVICE_LIST_FILTER = 'SET_DEVICE_LIST_FILTER'
export const deviceListFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/*
 * action creators
 */

// export const fetchList = (text) => {
//   return { type: FETCH_LIST }
// }

export const fetchList = () => {
  // try {
  const  headers = { 'X-Custom-Header': 'foobar' }
  const params = {};
  const options = {
    headers,
    method: 'GET',
    data: {},
    params,
    url: 'http://localhost:3010/devices/',
  };
  const axiosInstance = axios.create(options);
  return axiosInstance.get(options.url)
    .then(res => {
      return {
        type: 'SEARCH_FILTER_SUCCESS',
        devices: res
      }
  })
}