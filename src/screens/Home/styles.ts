import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 220,
    height: 200,
    alignSelf: 'center',
    marginTop: 24,
  },
  contentImage: {
    alignItems: 'center',
  },
  contentModal: {},
});
