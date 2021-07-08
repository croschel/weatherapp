import React from 'react';

import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '~/global/styles/theme';
import { styles } from './styles';

interface InfoTempBoxProps {
  temperature: number;
  wind: number;
  precipitation: number;
}

export const InfoTempBox = ({
  temperature,
  wind,
  precipitation,
}: InfoTempBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nublado</Text>
      <Text style={styles.tempText}>{`${temperature}°`}</Text>
      <View style={styles.footerInfo}>
        <View style={styles.leftFooterInfo}>
          <Icon name="wind" size={15} color={colors.primary} />
          <Text style={styles.footerText}>{`${wind} km/h`}</Text>
        </View>
        <View style={styles.rightFooterInfo}>
          <Icon name="droplet" size={15} color={colors.primary} />
          <Text style={styles.footerText}>{`${precipitation}°`}</Text>
        </View>
      </View>
    </View>
  );
};
