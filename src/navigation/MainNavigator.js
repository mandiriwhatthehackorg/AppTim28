import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, Text } from 'react-native';
import Login from '../screen/Login';
import TabNavigator from './TabNavigator';
import Home from '../screen/Home';
import Profil from '../screen/Profil';
import Promoku from '../screen/Promo';
const MainNavigator = createStackNavigator(
  {
    Login,
    TabNavigator,
  },
  {
    headerLeft: null,
  }
);

export default createAppContainer(MainNavigator);
