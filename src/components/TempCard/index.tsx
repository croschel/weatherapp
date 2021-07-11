import React from 'react';

import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '~/global/styles/theme';
import { useWeather } from '~/hooks/weather';
import Icon from 'react-native-vector-icons/Feather';

import { styles } from './styles';

interface TempCardProps {
  title: string;
  icon: string;
  info: string | number;
}

export const TempCard = ({ title, icon, info }: TempCardProps) => {
  const { weatherData } = useWeather();
  const { main } = weatherData.weather[0];
  let color;
  switch (main) {
    case 'Thunderstorm':
      color = colors.rainInitial;
      break;
    case 'Drizzle':
      color = colors.rainInitial;
      break;
    case 'Rain':
      color = colors.rainInitial;
      break;
    case 'Snow':
      color = colors.coldInitial;
      break;
    case 'Clear':
      color = colors.sunnyInitial;
      break;
    case 'Clouds':
      color = colors.coldInitial;
      break;
    default:
      break;
  }
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.hour}>{title}</Text>
      <Icon name={icon} size={50} color={colors.secondary} />
      <Text style={styles.temp}>{info}</Text>
    </TouchableOpacity>
  );
};
