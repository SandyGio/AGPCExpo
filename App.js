import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './page/LoginPage';
import Dashboard from './page/Dashboard';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './navigation/DrawerNavigator';

const RootStack = createSwitchNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: { header: null }
  },
  Home: {
    screen: Dashboard,
    navigationOptions: { header: null }
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
