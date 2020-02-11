import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AdminHomepage from '../page/admin/AdminHomepage';
import Class from '../page/admin/Class';
import ClassAllocation from '../page/admin/ClassAllocation';
import LessonCalendar from '../page/admin/LessonPlan';
import SpecialSunday from '../page/admin/SpecialSunday';
import Student from '../page/admin/Student';
import LoginPage from '../page/LoginPage';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH * 10,
}

const AdminDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AdminHomepage,
        navigationOptions: ({ navigation }) => ({
            title: 'Admin Homepage',
            drawerLabel: 'Admin Homepage',
            drawerIcon: () => (
                <Ionicons name="ios-home" size={20} />
            )
        })
    },
    Class: {
        screen: Class,
        navigationOptions: ({ navigation }) => ({
            title: 'Class',
            drawerLabel: 'Class',
            drawerIcon: () => (
                <Ionicons name="ios-list" size={20} />
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
    SpecialSunday: {
        screen: SpecialSunday,
        navigationOptions: ({ navigation }) => ({
            title: 'Special Sunday',
            drawerLabel: 'Special Sunday',
            drawerIcon: () => (
                <Ionicons name="ios-happy" size={20} />
            )
        })
    },
    Student: {
        screen: Student,
        navigationOptions: ({ navigation }) => ({
            title: 'Student',
            drawerLabel: 'Student',
            drawerIcon: () => (
                <Ionicons name="ios-contacts" size={20} />
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

export default AdminDrawerNavigator;
