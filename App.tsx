import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Routes from '~/routes';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </>
  );
};

export default App;
