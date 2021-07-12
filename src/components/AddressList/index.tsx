import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { GeoResult, PlacesResults } from '~/hooks/location';
import { styles } from './styles';

interface AddressListProps {
  data: PlacesResults;
  onSelectAddress: (item: GeoResult) => void;
}

export const AddressList = ({ data, onSelectAddress }: AddressListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item?.formatted_address}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectAddress(item)}
            style={styles.content}>
            <Text style={styles.text}>{item?.formatted_address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
