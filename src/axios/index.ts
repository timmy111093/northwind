import axios from "axios";

import {BASE_API_URL} from '../config';

const axiosCustomInstance = axios.create({
      baseURL: BASE_API_URL
});

// axios interceptors
// 1. request
// 2. response

axiosCustomInstance.interceptors.request.use((request) => {
      return request;
}, (err) => {
      return err;     
});

axiosCustomInstance.interceptors.response.use((response) => {
      return response;
}, (err) => {
      if(err.response.status === 401){
            console.log('errorrrrrrr!!!!');
      }
});

export default axiosCustomInstance;