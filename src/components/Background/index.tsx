import React from 'react';
import { ReactNode } from 'react';

import { View } from 'react-native';

import { styles } from './styles';

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return <View style={styles.container}>{children}</View>;
};
