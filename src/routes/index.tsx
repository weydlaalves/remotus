import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../services/RootNavigation';
import { Home } from '../screens/Home';
import { Inicial } from '../screens/Inicial';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#FFF' },
        }}
      >
      <Screen name="home" component={Home} />
      <Screen name="inicial" component={Inicial} />
      
      
      </Navigator>
    </NavigationContainer>
  );
}
