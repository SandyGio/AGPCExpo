import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './page/LoginPage';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './navigation/DrawerNavigator';

const RootStack = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: { headerShown: false }
  },
  Home: {
    screen: DrawerNavigator,
    navigationOptions: { headerShown: false }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      RootStack: RootStack,
      DrawerNavigator: DrawerNavigator
    },
    {
      Main: RootStack
    })
);
