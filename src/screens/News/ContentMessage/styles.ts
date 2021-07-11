import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: colors.secondary,
    padding: 16,
    marginTop: 40,
    marginBottom: 16,
  },
  content: {
    marginTop: 24,
    marginBottom: 16,
  },
  title: {
    color: colors.highlight,
  },
  description: {
    color: colors.heading,
  },
  image: {
    width: 90,
    height: 80,
    position: 'absolute',
    top: -24,
    right: 16,
  },
});
