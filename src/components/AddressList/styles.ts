import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  content: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderColor: colors.secondary,
  },
  text: {
    color: colors.heading,
  },
});
