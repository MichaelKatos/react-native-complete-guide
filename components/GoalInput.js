import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title='ADD'
        color='#5b5'
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1.5,
    flex: 5,
    marginRight: 10,
    fontSize: 24,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    color: '#a1a1a1'
  }
});

export default GoalInput;
