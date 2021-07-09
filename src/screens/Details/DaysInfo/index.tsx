import React from 'react';

import { FlatList, Text, View } from 'react-native';
import { DayInfoLine } from '~/components/DayInfoLine';
import { daysInfo } from '~/mocks/daysInfo';

import { styles } from './styles';

export const DaysInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próxima semana</Text>
      <FlatList
        data={daysInfo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DayInfoLine
            day={item.day}
            minTemp={item.minTemp}
            maxTemp={item.maxTemp}
            icon={item.type}
          />
        )}
      />
    </View>
  );
};
