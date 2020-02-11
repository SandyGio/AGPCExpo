import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';

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

const DrawerConfig = {
    drawerWidth: WIDTH * 10,
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Dashboard,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: () => (
                <Ionicons name="ios-home" size={20} />
            )
        })
    },
    LessonCalendar: {
        screen: LessonCalendar,
        navigationOptions: ({ navigation }) => ({
            title: 'Lesson Calendar',
            drawerLabel: 'Lesson Calendar',
            drawerIcon: () => (
                <Ionicons name="ios-calendar" size={20} />
            )
        })
    },
    TakeAttendance: {
        screen: TakeAttendance,
        navigationOptions: ({ navigation }) => ({
            title: 'Take Attendance',
            drawerLabel: 'Take Attendance',
            drawerIcon: () => (
                <Ionicons name="ios-contacts" size={20} />
            )
        })
    },
    AttendanceReport: {
        screen: AttendanceReport,
        navigationOptions: ({ navigation }) => ({
            title: 'Attendance Report',
            drawerLabel: 'Attendance Report',
            drawerIcon: () => (
                <Ionicons name="ios-grid" size={20} />
            )
        })
    },
    Database: {
        screen: Database,
        navigationOptions: ({ navigation }) => ({
            title: 'Database',
            drawerLabel: 'Database',
            drawerIcon: () => (
                <Ionicons name="ios-archive" size={20} />
            )
        })
    },
    ClassAllocation: {
        screen: ClassAllocation,
        navigationOptions: ({ navigation }) => ({
            title: 'Class Allocation',
            drawerLabel: 'Class Allocation',
            drawerIcon: () => (
                <Ionicons name="ios-locate" size={20} />
            )
        })
    },
    ActivityPlan: {
        screen: ActivityPlan,
        navigationOptions: ({ navigation }) => ({
            title: 'Activity Plan',
            drawerLabel: 'Activity Plan',
            drawerIcon: () => (
                <Ionicons name="ios-walk" size={20} />
            )
        })
    },
    VenueAllocation: {
        screen: VenueAllocation,
        navigationOptions: ({ navigation }) => ({
            title: 'Venue Allocation',
            drawerLabel: 'Venue Allocation',
            drawerIcon: () => (
                <Ionicons name="ios-locate" size={20} />
            )
        })
    },
    Logout: {
        screen: LoginPage,
        navigationOptions: ({ navigation }) => ({
            title: 'Log Out',
            drawerLabel: 'Log Out',
            drawerIcon: () => (
                <Ionicons name="ios-power" size={20} />
            )
        })
    },
});

export default DrawerNavigator;
