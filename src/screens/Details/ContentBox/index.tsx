import React from 'react';

import { Image, Text, View } from 'react-native';
import SunCold from '~/assets/sun-cold.png';
import Sunny from '~/assets/sunny.png';
import SunCloud from '~/assets/sun-cloud.png';
import Rain from '~/assets/rain.png';
import { useWeather } from '~/hooks/weather';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { colors } from '~/global/styles/theme';
import { getTime } from '~/utils/date';

export const ContentBox = () => {
  const { weatherData } = useWeather();
  const { main } = weatherData.weather[0];
  const { temp_min, temp_max } = weatherData.main;
  const { sunrise, sunset } = weatherData.sys;
  const { all } = weatherData.clouds;
  let icon;
  switch (main) {
    case 'Thunderstorm':
      icon = Rain;
      break;
    case 'Drizzle':
      icon = SunCold;
      break;
    case 'Rain':
      icon = Rain;
      break;
    case 'Snow':
      icon = SunCold;
      break;
    case 'Clear':
      icon = Sunny;
      break;
    case 'Clouds':
      icon = SunCold;
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tempsContent}>
        <Image style={styles.image} source={icon} />
        <Text style={styles.title}>Temperatura</Text>
        <View style={styles.tempsBox}>
          <Text style={styles.tempsText}>{`Mín ${temp_min.toFixed(1)}º`}</Text>
          <Text style={styles.tempsText}>{`Máx ${temp_max.toFixed(1)}º`}</Text>
        </View>
      </View>
      <View style={styles.twoCardsBox}>
        <View style={[styles.sunContent, styles.marginRight]}>
          <Text>Nascer do Sol</Text>
          <Icon name="sunrise" size={50} color={colors.heading} />
          <Text>{getTime(sunrise)}</Text>
        </View>
        <View style={styles.sunContent}>
          <Text>Cair do Sol</Text>
          <Icon name="sunset" size={50} color={colors.heading} />
          <Text>{getTime(sunset)}</Text>
        </View>
      </View>
      <View style={styles.cloudsContent}>
        <Text>Número de nuvens</Text>
        <Icon name="cloud" size={50} color={colors.heading} />
        <Text>{all}</Text>
      </View>
    </View>
  );
};
