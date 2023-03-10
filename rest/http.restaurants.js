import HttpBase from '../services/http.base';
import AppConstants from '../constants/constants';

class Httprestaurant extends HttpBase {
  getRestaurants = () => {
    return this.GET(`${AppConstants.baseURL}/items/resturants`);
  };
  getRestaurant = id => {
    return this.GET(`${AppConstants.baseURL}/items/resturants/${id}`);
  };
  postReview = (id, resturantReviews) => {
    console.log('http', id, resturantReviews);
    return this.Post(`${AppConstants.baseURL}/items/resturants/reviews/${id}`, {
      resturantReviews,
    });
  };
  postRate = (id, resturantRate) => {
    console.log('http', id, resturantRate);
    return this.Post(`${AppConstants.baseURL}/items/resturants/ratings/${id}`, {
      rate: resturantRate,
    });
  };
}
const HttpRestaurant = new Httprestaurant();
export default HttpRestaurant;
