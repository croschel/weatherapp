import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native';
import CardCloud from '~/assets/card-cloud.png';
import { colors } from '~/global/styles/theme';
import { useWeather } from '~/hooks/weather';

import { styles } from './styles';

interface TempCardProps {
  hour: string;
  temperature: number;
}

export const TempCard = ({ hour, temperature }: TempCardProps) => {
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
      <Text style={styles.hour}>{hour}</Text>
      <Image source={CardCloud} style={styles.image} />
      <Text style={styles.temp}>{`${temperature}°`}</Text>
    </TouchableOpacity>
  );
};
