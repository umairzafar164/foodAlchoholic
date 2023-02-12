import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTg2OGQ1MzFkYWMxMTNiMDcwNDVkYiIsImlhdCI6MTY3NjE3NTU3M30.b6pipFOiGlWKMkXc4yZiTmF8Igv5jhL7d5itFfV3dOw',
  },
};

export default class HttpBase {
  POST = (url, data) => {
    return axios
      .post(url, data, {headers})
      .then(this.successHandlerBase.bind(this))
      .catch(this.errorHandlerBase.bind(this));
  };

  GET = url => {
    console.log(url);
    return axios
      .get(url, config)
      .then(this.successHandlerBase.bind(this))
      .catch(this.errorHandlerBase.bind(this));
  };

  Post = (url, data) => {
    console.log(url, 'dd', data);
    return axios
      .post(url, data, config)
      .then(this.successHandlerBase.bind(this));
  };

  successHandlerBase = response => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    }
    return Promise.reject(response);
  };

  errorHandlerBase = error => {
    console.log('errrrr', error.status);
    return undefined;
  };
}
