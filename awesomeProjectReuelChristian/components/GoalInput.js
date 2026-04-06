import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
      const [goalText, setGoalText] = useState('');
    
      function goalInputHandler(enteredText){
        setGoalText(enteredText)
      };
      function addGoalHandler(){
        props.onAddGoal(goalText);
      };
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
            placeholder='Your Course Goal' 
            placeholderTextColor='#999'
            onChangeText={goalInputHandler}
            />
            
            <View style={styles.button}>
                <Pressable
                  onPressOut={addGoalHandler}
                  delayPressOut={200}
                  pressRetentionOffset={10}
                  android_ripple={{ color: "ccc" }}
                  style={({ pressed }) => [
                    styles.pressableButton,
                    pressed && styles.pressed
                  ]}
                >
                  <Text style={styles.buttonText}> Add Goal </Text>
                </Pressable>
            </View>
        </View>
    )
};

export default GoalInput;


const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    marginRight: 8,
    padding: 13,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f9667',
    borderRadius: 10,
    overflow: 'hidden',
    height: 45,
  },

  pressableButton: {
    backgroundColor: '#4f9667',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});
