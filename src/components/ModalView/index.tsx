import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '~/components/Background';
import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

const ModalView = ({ children, closeModal, ...rest }: Props) => {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.bar} />
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
