import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Styles from './Styles';
const InputForm = ({onAdd}) => {
  const [task, setTask] = useState('');
  const handleAddTask = () => {
    onAdd(task);
    setTask('');
  };
  return (
    <View style={Styles.formInput}>
      <TextInput
        value={task}
        style={Styles.input}
        placeholder="Enter task here"
        tvParallaxMagnification="#DDDDDD"
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        style={Styles.button}
        onPress={() => handleAddTask(task)}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InputForm;
