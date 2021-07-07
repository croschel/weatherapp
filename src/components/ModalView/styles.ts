import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    backgroundColor: colors.primary,
    padding: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  bar: {
    width: 40,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.highlight,
    alignSelf: 'center',
  },
});
