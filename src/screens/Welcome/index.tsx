import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Background } from '~/components/Background';
import SunWeather from '~/assets/sun-cold.png';
import { styles } from './styles';
import { SelectAddress } from '~/components/SelectAddress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/global/styles/theme';
import { useNavigation, useRoute } from '@react-navigation/native';

export const Welcome = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={SunWeather} />
          <View style={styles.titleBox}>
            <Text style={styles.welcomeText}>Seja bem vindo ao</Text>
            <Text style={styles.appTitle}>Happy Weather</Text>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.locationLabel}>
              Sua localização está correta?
            </Text>
            <SelectAddress
              location="Campinas, SP"
              theme="light"
              onPress={() => {}}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.acceptButton}>
          <View style={styles.buttonContent}>
            <Text style={styles.textButton}>Prosseguir</Text>
            <Icon
              name="keyboard-arrow-right"
              size={25}
              color={colors.confirm}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
};
