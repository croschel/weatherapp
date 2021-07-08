import React, { SelectHTMLAttributes } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GradientBackground } from '~/components/GradientBackground';
import { SelectAddress } from '~/components/SelectAddress';
import { colors } from '~/global/styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SunCloud from '~/assets/sun-cloud.png';
import { styles } from './styles';
import { InfoTempBox } from './InfoTempBox';
import { ScrollTimeTemp } from './ScrollTimeTemp';

export const Home = () => {
  return (
    <GradientBackground
      firstColor={colors.coldInitial}
      secondColor={colors.coldEnd}>
      <View style={styles.container}>
        <View style={styles.contentHeader}>
          <SelectAddress
            theme="dark"
            onPress={() => {}}
            location="Campinas, SP"
          />
          <TouchableOpacity>
            <Icon name="date-range" size={32} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentImage}>
          <Image style={styles.image} source={SunCloud} />
        </View>
        <InfoTempBox temperature={28} precipitation={8} wind={47} />
        <ScrollTimeTemp />
      </View>
    </GradientBackground>
  );
};
