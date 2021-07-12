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
import { GeoResult, useLocation } from '~/hooks/location';
import { useWeather } from '~/hooks/weather';
import { ImageContent } from './ImageContent';
import { AddressList } from '~/components/AddressList';

export const Home = () => {
  const { weatherData, getWeather } = useWeather();
  const {
    address,
    placesResults,
    setAddressStorage,
    setGeometryStorage,
    geometry,
  } = useLocation();

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

  const handleNews = () => {
    navigation.navigate('News');
  };

  const handleDetails = () => {
    navigation.navigate('Details');
  };

  const handleSelectAddress = (address: GeoResult) => {
    const { formatted_address } = address;
    const { lat, lng } = address.geometry.location;
    const separatedAddress = formatted_address.split(',');
    const cityState = separatedAddress[1];
    setAddressStorage(cityState);
    setGeometryStorage({ lat, lng });
    getWeather(lat, lng);
    onCloseModal();
  };
  const updateDataWeather = () => {
    const { lat, lng } = geometry;
    getWeather(lat, lng);
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
          <View style={styles.headerIconsBox}>
            <TouchableOpacity onPress={() => updateDataWeather()}>
              <Icon name="update" size={32} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rightHeaderIcon}
              onPress={() => handleNews()}>
              <Icon name="date-range" size={32} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <ImageContent />
        <InfoTempBox
          title={description}
          temperature={Number(temp.toFixed(1))}
          precipitation={humidity}
          wind={speed}
        />
        <ScrollTimeTemp />
        <TouchableOpacity
          onPress={() => handleDetails()}
          style={styles.buttonMoreInfo}>
          <Text style={styles.textMoreInfo}>Mais Informações</Text>
        </TouchableOpacity>
      </View>
      <ModalView visible={showModal} closeModal={onCloseModal}>
        <View style={styles.contentModal}>
          <LocationInput />
          <AddressList
            data={placesResults}
            onSelectAddress={(address) => handleSelectAddress(address)}
          />
        </View>
      </ModalView>
    </GradientBackground>
  );
};
