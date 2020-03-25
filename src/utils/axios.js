import axios from 'axios';

class axiosUtil {
  constructor () {
    this.axios = axios.create({
      timeout: 3 * 10000, // 30 second
    })
  }
}
export default new axiosUtil();