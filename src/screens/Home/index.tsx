import React from 'react';

import { View, Text } from 'react-native';
import { GradientBackground } from '~/components/GradientBackground';
import { colors } from '~/global/styles/theme';

import { styles } from './styles';

export const Home = () => {
  return (
    <GradientBackground
      firstColor={colors.coldInitial}
      secondColor={colors.coldEnd}>
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    </GradientBackground>
  );
};
