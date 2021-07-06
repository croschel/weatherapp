import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/screens/Home';
import { Welcome } from '~/screens/Welcome';

const Stack = createStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};
