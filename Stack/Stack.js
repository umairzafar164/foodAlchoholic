import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = () => {
  return <AppContainer />;
};

const myStack = createStackNavigator(
  {
    Register: RegisterScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      title: 'FoodAlcoholic App',
    },
  },
);

const AppContainer = createAppContainer(myStack);

export default Stack;
