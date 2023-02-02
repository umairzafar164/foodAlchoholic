import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjlmNDcxOWViZWU0YTcxZmJmZWJiMyIsImlhdCI6MTY3MzEzMTEyMX0.H8K8FQ7_tLa8dTW0bQ7L66pKZvUfOTs92iS_NMGczrw',
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
