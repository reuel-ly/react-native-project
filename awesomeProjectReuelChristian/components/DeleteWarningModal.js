import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

function DeleteWarningModal(props) {
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          <Text style={styles.warningText}>{props.text}</Text>

          <View style={styles.buttonRow}>

            <Pressable
              onPress={props.onClose}
              style={({ pressed }) => [styles.cancelButton, pressed && styles.pressed]}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={props.onConfirm}
              style={({ pressed }) => [styles.confirmButton, pressed && styles.pressed]}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>

          </View>

        </View>
      </View>
    </Modal>
  );
}

export default DeleteWarningModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  warningText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  confirmButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});