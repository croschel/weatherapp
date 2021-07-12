import React from 'react';
import { Text } from 'react-native';

import { FlatList, View } from 'react-native';

import { styles } from './styles';

export const AddressList = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.formatted_address ?? (
            <View style={styles.content}>
              <Text style={styles.text}>{item?.formatted_address}</Text>
            </View>
          )
        }
      />
    </View>
  );
};
