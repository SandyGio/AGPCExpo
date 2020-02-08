import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator} from 'react-navigation-drawer';

import Dashboard from '../page/Dashboard';
import LessonCalendar from '../page/LessonCalendar';
import LoginPage from '../page/LoginPage';
import TakeAttendance from '../page/TakeAttendance';
import AttendanceReport from '../page/AttendanceReport';
import Database from '../page/Database';
import ClassAllocation from '../page/ClassAllocation';
import ActivityPlan from '../page/ActivityPlan';
import VenueAllocation from '../page/VenueAllocation';

const WIDTH = Dimensions.get('window').width;

console.log("width from menu", WIDTH);

const DrawerConfig = {
    drawerWidth: WIDTH * 10,
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Dashboard
    },
    LessonCalendar: {
        screen: LessonCalendar
    },
    TakeAttendance: {
        screen: TakeAttendance
    },
    AttendanceReport: {
        screen: AttendanceReport
    },
    Database: {
        screen: Database
    },
    ClassAllocation: {
        screen: ClassAllocation
    },
    ActivityPlan: {
        screen: ActivityPlan
    },
    VenueAllocation: {
        screen: VenueAllocation
    },
    Logout: {
        screen: LoginPage
    },
});

export default DrawerNavigator;
