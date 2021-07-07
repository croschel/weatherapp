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
import { styles } from './styles';

interface LocationInputProps {
  onPress: () => void;
}

export const LocationInput = ({ onPress }: LocationInputProps) => {
  const [location, setLocation] = useState<string>('');
  const handleChangeText = (text: string) => {
    setLocation(text);
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
          <TouchableOpacity style={styles.buttonSearch} onPress={onPress}>
            <Icon name="search" size={32} color={colors.heading} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
