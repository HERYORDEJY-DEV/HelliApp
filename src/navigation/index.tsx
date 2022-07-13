import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import {RootNavigationType} from './types';
import Details from '../screens/details';

const {Screen, Navigator} = createStackNavigator<RootNavigationType>();

export default function RootNavigation() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Home'} component={Home} />
      <Screen name={'Details'} component={Details} />
    </Navigator>
  );
}
