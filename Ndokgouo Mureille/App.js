import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/profileScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import mylocation from './screens/mylocation';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Tab.Screen name="SignInScreen" component={SignInScreen}/>
        <Tab.Screen name="DescriptionScreen" component={DescriptionScreen}/>
        <Tab.Screen name="mylocation" component={mylocation}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


