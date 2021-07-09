import React from 'react';

import { Text, View } from 'react-native';
import { Background } from '~/components/Background';
import { FlexStatusBar } from '~/components/FlexStatusBar';
import Header from '~/components/Header';
import { ContentMessage } from './ContentMessage';
import { DaysInfo } from './DaysInfo';

import { styles } from './styles';

export const Details = () => {
  return (
    <Background>
      <FlexStatusBar theme="light" />
      <Header title="Campinas, SP" />
      <View style={styles.container}>
        <ContentMessage />
        <DaysInfo />
      </View>
    </Background>
  );
};
