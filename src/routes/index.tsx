import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LocationProvider } from '~/hooks/location';

import { MainRoutes } from './app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <MainRoutes />
      </LocationProvider>
    </NavigationContainer>
  );
};

export default Routes;
