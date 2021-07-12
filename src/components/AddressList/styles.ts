import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  content: {
    paddingVertical: 8,
  },
  text: {
    color: colors.heading,
  },
});
