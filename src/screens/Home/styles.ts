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
  headerIconsBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHeaderIcon: {
    marginLeft: 24,
  },
  contentModal: {},
  buttonMoreInfo: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.secondary,
    marginTop: 24,
  },
  textMoreInfo: {
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
