import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import ModalHero from './components/ModalHero';
import NavBar from './components/NavBar';
import WarningModal from './components/WarningModal';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('goals');
  const [warningVisible, setWarningVisible] = useState(false);

  function addGoalHandler(goal) {
  setCourseGoals((currentGoals) => {
    const updatedGoals = [
      ...currentGoals,
      { text: goal, key: Math.random().toString() }
    ];

    if (updatedGoals.length > 5) {
      setWarningVisible(true);
    }

    return updatedGoals;
  });
  }

  function continueHandler() {
    setModalVisible(false);
  }

  function tabHandler(tabName){
    setActiveTab(tabName);
    }

  

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== key)
    );
  }

  return (
    <View style={styles.appContainer}>
      
      <ModalHero
        visible={modalVisible}
        onContinue={continueHandler}
      />
      
      <NavBar 
        activeTab={activeTab}
        onTabPress={tabHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
      />



      <GoalList 
        courseGoals={courseGoals}
        onDeleteGoal={deleteGoalHandler} 
      />

      <WarningModal 
        visible={warningVisible}
        onClose={() => setWarningVisible(false)}
        text = {'You have more than 5 goals. Don’t overwhelm yourself!'}
      />
      

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

});
