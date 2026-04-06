import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

function WarningModal(props) {
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            {props.text}
        </Text>

        <Pressable
            onPress={props.onClose}
            style={styles.pressableButton}
        >
            <Text style={styles.buttonText}>Okay</Text>
        </Pressable>

        </View>
    </View>
    </Modal>
  );
}

export default WarningModal;




const styles = StyleSheet.create({
    pressableButton: {
    backgroundColor: '#4f9667',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    },
    goalItem: {
    width: '100%',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f8f3',
    borderWidth: 1,
    borderColor: '#4f9667',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    },
});