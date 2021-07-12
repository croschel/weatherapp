import React from 'react';
import { useState } from 'react';

import {
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/global/styles/theme';
import { useLocation } from '~/hooks/location';
import { styles } from './styles';

export const LocationInput = () => {
  const { searchLocation, getAddressLocationInput, location } = useLocation();
  const handleChangeText = (text: string) => {
    searchLocation(text);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua localização"
            onChangeText={(text) => handleChangeText(text)}
          />
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => getAddressLocationInput(location)}>
            <Icon name="search" size={32} color={colors.heading} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
