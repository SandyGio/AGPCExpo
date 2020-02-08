import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator} from 'react-navigation-drawer';

import Dashboard from '../page/Dashboard';
import LoginPage from '../page/LoginPage';

const WIDTH = Dimensions.get('window').width;

console.log("width from menu", WIDTH);

const DrawerConfig = {
    drawerWidth: WIDTH * 10,
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Dashboard
    },
});

export default DrawerNavigator;
