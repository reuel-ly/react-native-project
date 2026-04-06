import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

function GoalList(props) {
    return(
        <View style={styles.goalListContainer}>
        <FlatList 
          data={props.courseGoals}
          keyExtractor={(item) => item.key} 
          renderItem={(itemData) => <GoalItem text={itemData.item.text}
                                      id={itemData.item.key}                     
                                      onDeleteItem={props.onDeleteGoal}
                                    />}
          
        />
      </View>
    )
};

export default GoalList;


const styles = StyleSheet.create({
  goalListContainer: {
    width: '100%',
    flex: 5,
  },

});