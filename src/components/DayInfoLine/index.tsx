import React from 'react';

import { Text, View } from 'react-native';
import { colors } from '~/global/styles/theme';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface DayInfoLineProps {
  day: string;
  maxTemp: number;
  minTemp: number;
  icon: 'cloud-drizzle' | 'cloud-lightning' | 'cloud-rain' | 'cloud' | 'sun';
}

export const DayInfoLine = ({
  day,
  maxTemp,
  minTemp,
  icon,
}: DayInfoLineProps) => {
  let color;
  switch (icon) {
    case 'cloud-drizzle':
      color = colors.highlight;
      break;
    case 'cloud-lightning':
      color = colors.highlight;
      break;
    case 'cloud-rain':
      color = colors.rainEnd;
      break;
    case 'cloud':
      color = colors.sunnyEnd;
      break;
    case 'sun':
      color = colors.sunnyEnd;
      break;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>{day}</Text>
      <View style={styles.content}>
        <View style={styles.tempBox}>
          <Text style={styles.maxTemp}>{`${maxTemp}°`}</Text>
          <Text style={styles.minTemp}>{`${minTemp}°`}</Text>
        </View>
        <Icon style={styles.icon} name={icon} size={25} color={color} />
      </View>
    </View>
  );
};
