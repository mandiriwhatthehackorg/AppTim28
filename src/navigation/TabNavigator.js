import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import Home from '../screen/Home';
import Profil from '../screen/Profil';
import PromoList from '../screen/Promo';
import Promoku from '../screen/PromoBooked';
import Nearby from '../screen/Nearby';
import DetailsPromo from '../screen/DetailsPromo';

const HomeNavigator = createStackNavigator({
  Home,
  PromoList,
  DetailsPromo,
});

const PromoNavigator = createStackNavigator({
  Promoku,
  DetailsPromo,
});

const TabNavigator = createBottomTabNavigator(
  {
    Beranda: HomeNavigator,
    Nearby: Nearby,
    Promoku: PromoNavigator,
    Profil: Profil,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        if (routeName == 'Beranda') {
          return (
            <Image
              style={{ width: 14, height: 14 }}
              source={focused ? require('../assets/home.jpeg') : require('../assets/home.jpeg')}
            />
          );
        } else if (routeName == 'Nearby') {
          return (
            <Image
              style={{ width: 14, height: 14 }}
              source={focused ? require('../assets/nearby.jpeg') : require('../assets/nearby.jpeg')}
            />
          );
        } else if (routeName == 'Promoku') {
          return (
            <Image
              style={{ width: 14, height: 14 }}
              source={focused ? require('../assets/promo.jpeg') : require('../assets/promo.jpeg')}
            />
          );
        } else {
          return (
            <Image
              style={{ width: 14, height: 14 }}
              source={focused ? require('../assets/profile.jpeg') : require('../assets/profile.jpeg')}
            />
          );
        }
      },
    }),
    header: null,
    headerLeft: null,
    tabBarOptions: {
      renderIndicator: () => null,
      showIcon: 'true',
      lazy: 'true',
      activeTintColor: '#003d79',
      inactiveTintColor: '#99A5B6',
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 10,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

export default TabNavigator;
