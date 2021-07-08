import React from 'react';

import { View, FlatList } from 'react-native';
import { TempCard } from '~/components/TempCard';
import { timeline } from '~/mocks/timeline';
import { InfoTempBox } from '../InfoTempBox';

import { styles } from './styles';

export const ScrollTimeTemp = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={timeline}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TempCard temperature={item.temp} hour={item.hour} />
        )}
      />
    </View>
  );
};
