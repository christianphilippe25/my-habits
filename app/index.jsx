import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './home/index'
import ProfileScreen from './profile/index'
import AddHabit from './addHabit/index'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyStack = () => {
  return (
    <Tab.Navigator initialRouteName='Home' 
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="AddHabit" component={AddHabit} /> */}
    </Tab.Navigator>
  );
};


export default MyStack;