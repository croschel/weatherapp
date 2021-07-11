import React from 'react';

import { Image, View } from 'react-native';
import SunCloud from '~/assets/sun-cloud.png';
import Rain from '~/assets/rain.png';
import SunCold from '~/assets/sun-cold.png';
import Sunny from '~/assets/sunny.png';
import { styles } from './styles';
import { useWeather } from '~/hooks/weather';

export const ImageContent = () => {
  const { weatherData } = useWeather();
  const { main } = weatherData.weather[0];
  let image;
  switch (main) {
    case 'Thunderstorm':
      image = Rain;
      break;
    case 'Drizzle':
      image = Rain;
      break;
    case 'Rain':
      image = Rain;
      break;
    case 'Snow':
      image = SunCold;
      break;
    case 'Clear':
      image = Sunny;
      break;
    case 'Clouds':
      image = SunCloud;
      break;
    default:
      break;
  }
  return (
    <View style={styles.contentImage}>
      <Image style={styles.image} source={image} />
    </View>
  );
};
