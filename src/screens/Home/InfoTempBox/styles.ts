import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    marginTop: 8,
  },
  tempText: {
    fontSize: 80,
    color: colors.secondary,
  },
  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftFooterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightFooterInfo: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 2,
    color: colors.secondary,
  },
});
