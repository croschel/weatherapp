import React from 'react';

import { ScrollView, FlatList, SafeAreaView } from 'react-native';
import { TempCard } from '~/components/TempCard';
import { timeline } from '~/mocks/timeline';
import { InfoTempBox } from '../InfoTempBox';
import CardCloud from '~/assets/card-cloud.png';
import { styles } from './styles';
import { useWeather } from '~/hooks/weather';

export const ScrollTimeTemp = () => {
  const { weatherData } = useWeather();
  const { humidity, pressure, feels_like } = weatherData.main;
  const { visibility } = weatherData;
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <TempCard title="Pressão" icon="globe" info={`${pressure} hpa`} />
        <TempCard title="Humidade" icon="droplet" info={`${humidity}%`} />
        <TempCard
          title="Sensação"
          icon="wind"
          info={`${feels_like.toFixed(1)}º`}
        />
        <TempCard title="Visibilidade" icon="eye" info={`${visibility}m`} />
      </ScrollView>
    </SafeAreaView>
  );
};
