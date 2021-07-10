import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 60,
    alignSelf: 'center',
    marginVertical: 16,
  },
  hour: {
    color: colors.secondary,
  },
  temp: {
    fontSize: 28,
    marginLeft: 8,
    color: colors.primary,
  },
});
