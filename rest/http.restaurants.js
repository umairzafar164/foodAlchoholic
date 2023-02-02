import HttpBase from '../services/http.base';
import AppConstants from '../constants/constants';

class Httprestaurant extends HttpBase {
  getRestaurants = () => {
    return this.GET(`${AppConstants.baseURL}/items/resturants`);
  };
  getRestaurant = id => {
    console.log('http');
    return this.GET(`${AppConstants.baseURL}/items/resturants/${id}`);
  };
}
const HttpRestaurant = new Httprestaurant();
export default HttpRestaurant;
