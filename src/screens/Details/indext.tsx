import React from 'react';

import { Text, View } from 'react-native';
import { Background } from '~/components/Background';
import { FlexStatusBar } from '~/components/FlexStatusBar';
import Header from '~/components/Header';
import { useLocation } from '~/hooks/location';
import { ContentBox } from './ContentBox';

import { styles } from './styles';

export const Details = () => {
  const { address } = useLocation();
  return (
    <Background>
      <FlexStatusBar theme="light" />
      <Header title={address} />
      <View style={styles.container}>
        <ContentBox />
      </View>
    </Background>
  );
};
