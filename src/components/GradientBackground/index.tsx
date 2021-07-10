import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import { styles } from './styles';
import { colors } from '~/global/styles/theme';

interface GradientBackgroundProps {
  weather: 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Clear' | 'Clouds';
  children: ReactNode;
}
export const GradientBackground = ({
  weather,
  children,
}: GradientBackgroundProps) => {
  let firstColor = '';
  let secondColor = '';
  switch (weather) {
    case 'Thunderstorm':
      firstColor = colors.rainInitial;
      secondColor = colors.rainEnd;
      break;
    case 'Drizzle':
      firstColor = colors.rainInitial;
      secondColor = colors.rainEnd;
      break;
    case 'Rain':
      firstColor = colors.rainInitial;
      secondColor = colors.rainEnd;
      break;
    case 'Snow':
      firstColor = colors.coldInitial;
      secondColor = colors.coldEnd;
      break;
    case 'Clear':
      firstColor = colors.sunnyInitial;
      secondColor = colors.sunnyEnd;
      break;
    case 'Clouds':
      firstColor = colors.coldInitial;
      secondColor = colors.coldEnd;
      break;
    default:
      break;
  }
  return (
    <LinearGradient colors={[firstColor, secondColor]} style={styles.container}>
      {children}
    </LinearGradient>
  );
};
