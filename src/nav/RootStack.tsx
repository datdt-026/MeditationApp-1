import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeSleep from '../screens/WelcomeSleep';
import music from '../screens/music';
import SleepMusic from '../screens/SleepMusic';
import MainTab from './MainTab';

export type RootStackParamList = {
  WelcomeSleep: undefined;
  SleepMusic: undefined;
  music: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeSleep"
          component={WelcomeSleep}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="music"
          component={music}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SleepMusic"
          component={SleepMusic}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
