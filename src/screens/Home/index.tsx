import React, { SelectHTMLAttributes, useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GradientBackground } from '~/components/GradientBackground';
import { SelectAddress } from '~/components/SelectAddress';
import { colors } from '~/global/styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SunCloud from '~/assets/sun-cloud.png';
import { styles } from './styles';
import { InfoTempBox } from './InfoTempBox';
import { ScrollTimeTemp } from './ScrollTimeTemp';
import { useNavigation } from '@react-navigation/native';
import { FlexStatusBar } from '~/components/FlexStatusBar';
import ModalView from '~/components/ModalView';
import { LocationInput } from '~/components/LocationInput';

export const Home = () => {
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
    <GradientBackground
      firstColor={colors.coldInitial}
      secondColor={colors.coldEnd}>
      <FlexStatusBar theme="dark" />
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <SelectAddress
            theme="dark"
            onPress={() => chooseLocationModal()}
            location="Campinas, SP"
          />
          <TouchableOpacity onPress={() => handleDetails()}>
            <Icon name="date-range" size={32} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentImage}>
          <Image style={styles.image} source={SunCloud} />
        </View>
        <InfoTempBox temperature={28} precipitation={8} wind={47} />
        <ScrollTimeTemp />
      </View>
      <ModalView visible={showModal} closeModal={onCloseModal}>
        <View style={styles.contentModal}>
          <LocationInput onPress={() => {}} />
        </View>
      </ModalView>
    </GradientBackground>
  );
};
