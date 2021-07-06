import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import { styles } from './styles';

interface GradientBackgroundProps {
  firstColor: string;
  secondColor: string;
  children: ReactNode;
}
export const GradientBackground = ({
  firstColor,
  secondColor,
  children,
}: GradientBackgroundProps) => {
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.container}>
      {children}
    </LinearGradient>
  );
};
