import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './src/ChatScreen/styles.js';

import LoginScreen from './src/LoginScreen';
import ChatScreen from './src/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>  
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={ChatScreen} name="ChatScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;