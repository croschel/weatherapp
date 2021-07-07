import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/global/styles/theme';

import { styles } from './styles';

interface SelectAddressProps {
  theme: 'light' | 'dark';
  location: string;
  onPress: () => void;
}

export const SelectAddress = ({
  theme,
  location,
  onPress,
}: SelectAddressProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        name="place"
        size={25}
        color={theme === 'dark' ? '#000' : colors.heading}
      />
      <Text
        style={[
          styles.location,
          { color: theme === 'dark' ? '#000' : colors.heading },
        ]}>
        {location}
      </Text>
      <Icon
        name="arrow-drop-down"
        size={25}
        color={theme === 'dark' ? '#000' : colors.heading}
      />
    </TouchableOpacity>
  );
};
