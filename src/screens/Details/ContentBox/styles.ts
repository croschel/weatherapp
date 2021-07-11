import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    color: colors.highlight,
    fontSize: 16,
  },
  description: {
    color: colors.heading,
  },
  image: {
    width: 90,
    height: 80,
    position: 'absolute',
    top: -32,
    right: 16,
  },
  tempsContent: {
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    backgroundColor: colors.secondary,
  },
  cloudsContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    backgroundColor: colors.secondary,
  },
  marginRight: {
    marginRight: 16,
  },
  sunContent: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  tempsText: {
    fontSize: 24,
  },
  twoCardsBox: {
    flexDirection: 'row',
  },
});
