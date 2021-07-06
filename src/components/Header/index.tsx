import React from 'react';
import { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { colors } from '~/global/styles/theme';
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  title: string;
  actions?: ReactNode;
};

const Header = ({ title, actions }: HeaderProps) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color={colors.heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {actions ? <View>{actions}</View> : <View style={{ width: 24 }} />}
    </View>
  );
};

export default Header;
