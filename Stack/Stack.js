import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RestaurantDetail from '../screens/RestaurantDetail';

const Stack = () => {
  return <AppContainer />;
};

const myStack = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
    Home: HomeScreen,
    RestaurantDetail: RestaurantDetail,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'FoodAlcoholic App',
    },
  },
);

const AppContainer = createAppContainer(myStack);

export default Stack;
