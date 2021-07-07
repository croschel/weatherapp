import { Platform, StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 56 : 56,
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() + 16 : 16,
    paddingHorizontal: 16,
  },
});
