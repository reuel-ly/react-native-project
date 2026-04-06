import { View, Text, Alert, Modal, StyleSheet, Pressable } from 'react-native';

function ModalHero(props) {
  return (
    <Modal 
        visible={props.visible} 
        animationType="fade" 
        onRequestClose={() => {
            Alert.alert('You are exiting.');
          }}
        onShow={() => console.log('Shown')}
        statusBarTranslucent={true}
        hardwareAccelerated={true}
        supportedOrientations={['portrait', 'landscape']} 
    >

      <View style={styles.modalContainer}>
        
        <View style={styles.heroContent}>
          <Text style={styles.title}>CPE Goal Tracker</Text>
          <Text style={styles.subtitle}>Reuel Christian M. Pornobe</Text>
        </View>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressedButton]}
          onPress={props.onContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

      </View>
    </Modal>
  );
}

export default ModalHero;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#4f9667',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  heroContent: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#d4ede1',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 24,
  },
  pressedButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#4f9667',
    fontSize: 16,
    fontWeight: 'bold',
  },
});