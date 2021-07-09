import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Routes from '~/routes';
import 'react-native-gesture-handler';
import { colors } from '~/global/styles/theme';

const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
