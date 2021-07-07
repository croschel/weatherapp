import React from 'react';
import { Text, View } from 'react-native';
import { Background } from '~/components/Background';
import { styles } from './styles';

export const Welcome = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    </Background>
  );
};
