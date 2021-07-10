import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LocationProvider } from '~/hooks/location';
import { WeatherProvider } from '~/hooks/weather';

import { MainRoutes } from './app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <WeatherProvider>
          <MainRoutes />
        </WeatherProvider>
      </LocationProvider>
    </NavigationContainer>
  );
};

export default Routes;
