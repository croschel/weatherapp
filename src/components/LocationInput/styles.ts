import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.secondary,
    paddingHorizontal: 16,
    backgroundColor: colors.secondary,
    color: colors.heading,
  },
  buttonSearch: {
    borderWidth: 1,
    borderRadius: 32,
    padding: 8,
    marginLeft: 8,
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
  },
});
