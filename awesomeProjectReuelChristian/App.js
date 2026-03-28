import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setGoalText(enteredText)
  };
  function addGoalHandler(){
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
      goalText,
    ]);
  };


  return (
    <View style={styles.appContainer}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
        placeholder='Your Course Goal' 
        placeholderTextColor='#999'
        onChangeText={goalInputHandler}
        />
        
        <View style={styles.button}>
          <Button 
          color = '#4f9667'
          title='Add Goal'
          onPress={addGoalHandler}
          />
        </View>
        
      </View>
      
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, key) => (
          <View key={key} style={styles.goalItem}>
            <Text style={styles.goalText} key={key}>{goal}</Text>
          </View>
          ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

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

  goalsContainer: {
    width: '100%',
    flex: 5,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f9667',
    borderRadius: 10,
    overflow: 'hidden',
    height: 45,
  },

  goalItem: {
    width: '100%',
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f8f3',
    borderWidth: 1,
    borderColor: '#4f9667',
    borderRadius: 8,
  },

  goalText: {
    fontSize: 16,
    color: '#333',
    alignItems: 'flex-end',
  },

});
