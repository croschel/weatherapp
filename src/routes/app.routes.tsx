import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/screens/Home';
import { Welcome } from '~/screens/Welcome';
import { Details } from '~/screens/Details/indext';
import { News } from '~/screens/News/indext';

const Stack = createStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
