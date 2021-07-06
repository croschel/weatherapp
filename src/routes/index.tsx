import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { MainRoutes } from './app.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
};

export default Routes;
