import HttpBase from '../services/http.base';
import AppConstants from '../constants/constants';

class Httplogin extends HttpBase {
  login = (email, password) => {
    console.log('http');
    return this.POST(`${AppConstants.baseURL}/users/login`, {email, password});
  };
}
const HttpLogin = new Httplogin();
export default HttpLogin;
