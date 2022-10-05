/* eslint-disable react/self-closing-comp */

import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import EditProfile from './screens/EditProfile';
import OderManage from './screens/OderManage';

//import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDays,
  faHouse,
  faUser,
  faBookmark,
  faLocationDot,
  faArrowCircleLeft,
  faPhone,
  faEyeSlash,
  faCamera,
  faRocket,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

// library.add(
//   fab,
//   faCalendarDays,
//   faHouse,
//   faUser,
//   faBookmark,
//   faLocationDot,
//   faArrowCircleLeft,
//   faPhone,
//   faEyeSlash,
//   faCamera,
//   faRocket,
//   faTrash,
//   faEye,
// );

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        <Stack.Screen name="OrderManage" component={OderManage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
