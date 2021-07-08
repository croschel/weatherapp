import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native';
import CardCloud from '~/assets/card-cloud.png';

import { styles } from './styles';

interface TempCardProps {
  hour: string;
  temperature: number;
}

export const TempCard = ({ hour, temperature }: TempCardProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: '#97f5f4' }]}>
      <Text style={styles.hour}>{hour}</Text>
      <Image source={CardCloud} style={styles.image} />
      <Text style={styles.temp}>{`${temperature}°`}</Text>
    </TouchableOpacity>
  );
};
