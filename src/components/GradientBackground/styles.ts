import { Platform, StyleSheet } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 56 : 56,
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() + 16 : 16,
    paddingHorizontal: 16,
  },
});
