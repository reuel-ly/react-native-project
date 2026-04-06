import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import DeleteWarningModal from './DeleteWarningModal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function GoalItem(props) {
  const [warningVisible, setWarningVisible] = useState(false);

  function pressDeleteHandler() {
    setWarningVisible(true);
  }

  function confirmDeleteHandler() {
    setWarningVisible(false);
    props.onDeleteItem(props.id);
  }

  function cancelDeleteHandler() {
    setWarningVisible(false);
  }

  return (
    <View style={styles.goalItem}>

      <DeleteWarningModal
        visible={warningVisible}
        text="Are you sure you want to delete this goal?"
        onClose={cancelDeleteHandler}
        onConfirm={confirmDeleteHandler}
      />

      <Text style={styles.goalText}>{props.text}</Text>

      <Pressable
        onPress={pressDeleteHandler}
        style={({ pressed }) => [styles.deleteButton, pressed && styles.pressedButton]}
      >
        <Text> {<MaterialIcons name="delete" size={24} color="#c26a6a" />} </Text>
      </Pressable>

    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
  goalText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  pressedButton: {
    opacity: 0.6,
  },
});