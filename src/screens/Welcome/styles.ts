import { StyleSheet } from 'react-native';
import { colors } from '~/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 180,
    alignSelf: 'center',
    marginTop: 24,
  },
  titleBox: {
    marginVertical: 16,
  },
  welcomeText: {
    color: colors.heading,
    fontSize: 40,
    textAlign: 'center',
  },
  appTitle: {
    color: colors.heading,
    fontSize: 40,
    textAlign: 'center',
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  locationLabel: {
    color: colors.heading,
    fontSize: 16,
    marginBottom: 8,
  },
  acceptButton: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: colors.confirm,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textButton: {
    color: colors.confirm,
    fontSize: 20,
  },
  contentModal: {},
});
