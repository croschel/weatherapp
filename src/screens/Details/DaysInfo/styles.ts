import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.heading,
    paddingVertical: 16,
  },
});
