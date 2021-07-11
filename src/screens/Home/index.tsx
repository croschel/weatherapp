import React, { SelectHTMLAttributes, useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GradientBackground } from '~/components/GradientBackground';
import { SelectAddress } from '~/components/SelectAddress';
import { colors } from '~/global/styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
import { InfoTempBox } from './InfoTempBox';
import { ScrollTimeTemp } from './ScrollTimeTemp';
import { useNavigation } from '@react-navigation/native';
import { FlexStatusBar } from '~/components/FlexStatusBar';
import ModalView from '~/components/ModalView';
import { LocationInput } from '~/components/LocationInput';
import { useLocation } from '~/hooks/location';
import { useWeather } from '~/hooks/weather';
import { ImageContent } from './ImageContent';

export const Home = () => {
  const { address } = useLocation();
  const { weatherData } = useWeather();
  const { description, main } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;
  const { speed } = weatherData.wind;

  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  const chooseLocationModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <GradientBackground weather={main}>
      <FlexStatusBar theme="dark" />
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <SelectAddress
            theme="dark"
            onPress={() => chooseLocationModal()}
            location={address}
          />
          <TouchableOpacity onPress={() => handleDetails()}>
            <Icon name="date-range" size={32} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <ImageContent />
        <InfoTempBox
          title={description}
          temperature={Number(temp.toFixed(1))}
          precipitation={humidity}
          wind={speed}
        />
        <ScrollTimeTemp />
        <TouchableOpacity style={styles.buttonMoreInfo}>
          <Text style={styles.textMoreInfo}>Mais Informações</Text>
        </TouchableOpacity>
      </View>
      <ModalView visible={showModal} closeModal={onCloseModal}>
        <View style={styles.contentModal}>
          <LocationInput onPress={() => {}} />
        </View>
      </ModalView>
    </GradientBackground>
  );
};
