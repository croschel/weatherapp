import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';
import { screenWidth } from '~/utils/metrics';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: screenWidth * 0.3,
  },
  textInfo: {
    color: colors.heading,
    fontSize: 16,
  },
  tempBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maxTemp: {
    color: colors.heading,
    fontSize: 16,
  },
  minTemp: {
    color: colors.highlight,
    fontSize: 16,
    marginLeft: 8,
  },
});
