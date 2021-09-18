import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  Home: undefined;
  Sleep: undefined;
  Meditate: undefined;
  Music: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return;
};

export default MainTab;
