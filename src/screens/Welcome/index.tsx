import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { Background } from '~/components/Background';
import SunWeather from '~/assets/sun-cold.png';
import { styles } from './styles';
import { SelectAddress } from '~/components/SelectAddress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '~/global/styles/theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalView from '~/components/ModalView';
import { useState } from 'react';
import { LocationInput } from '~/components/LocationInput';
import { FlexStatusBar } from '~/components/FlexStatusBar';
import { useEffect } from 'react';
import { useLocation } from '~/hooks/location';
import { useWeather } from '~/hooks/weather';
import { AddressList } from '~/components/AddressList';

export const Welcome = () => {
  const navigation = useNavigation();
  const { loadingWeather } = useWeather();

  const [showModal, setShowModal] = useState(false);

  const { address, loading, getAddressLocationInput } = useLocation();

  const chooseLocationModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleNextButton = () => {
    navigation.navigate('Home');
  };

  return (
    <Background>
      <FlexStatusBar theme="light" />
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
            {loading || address === 'buscando' ? (
              <ActivityIndicator
                style={{ marginTop: 16 }}
                size="large"
                color={colors.heading}
              />
            ) : (
              <SelectAddress
                location={address}
                theme="light"
                onPress={() => chooseLocationModal()}
              />
            )}
          </View>
        </View>
        {!loadingWeather && (
          <TouchableOpacity
            disabled={loading || address === 'buscando'}
            onPress={() => handleNextButton()}
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
        )}
      </SafeAreaView>
      <ModalView visible={showModal} closeModal={onCloseModal}>
        <View style={styles.contentModal}>
          <LocationInput />
          {/* <AddressList data={} /> */}
        </View>
      </ModalView>
    </Background>
  );
};
