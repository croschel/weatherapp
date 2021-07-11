import React from 'react';

import { Image, Text, View } from 'react-native';
import SunWeather from '~/assets/sun-cold.png';
import { styles } from './styles';

export const ContentMessage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={SunWeather} />
      <View style={styles.content}>
        <Text style={styles.title}>15 minutos atrás</Text>
        <Text style={styles.description}>
          O vento está muito forte hoje apesar do sol, portanto tomar cuidado ao
          sair.
        </Text>
      </View>
    </View>
  );
};
