import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToastContainer from './Toast';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ToastContainer />
      <Tab.Navigator>
        <Tab.Screen name="Toast Text" component={Screen1} />
        <Tab.Screen name="Toast Component" component={Screen2} />
        <Tab.Screen name="Toast Timing" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
