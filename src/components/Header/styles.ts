import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    // fontFamily: '',
    fontSize: 20,
    color: colors.heading,
    padding: 24,
  },
});
