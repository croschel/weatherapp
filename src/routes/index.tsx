import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { LocationProvider } from '~/hooks/location';
import { WeatherProvider } from '~/hooks/weather';

import { MainRoutes } from './app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <WeatherProvider>
        <LocationProvider>
          <MainRoutes />
        </LocationProvider>
      </WeatherProvider>
    </NavigationContainer>
  );
};

export default Routes;
