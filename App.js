/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import Filter from './src/components/Filter';
import InputForm from './src/components/InputForm';
import TodoItems from './src/components/TodoItems';

export const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETE: 'complete',
};

const App: () => React$Node = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(FILTER.ALL);
  const onDelete = (id) => {
    setItems([...items.filter((item) => item.id !== id)]);
  };

  const onFilter = (fil) => {
    setFilter(fil);
  };

  const changeStatus = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.status = !item.status;
        }
        return item;
      }),
    );
  };

  const onAdd = (task) => {
    const id = Date.now();
    const todoTask = {
      id,
      status: false,
      content: task,
    };
    if (task === '') {
      Alert.alert('', 'Task Invalid');
    } else {
      setItems([...items, todoTask]);
    }
  };

  const clearAllItemsCompleted = () => {
    setItems(items.filter((item) => item.status === false));
  };

  return (
    <SafeAreaView>
      <View>
        <InputForm onAdd={onAdd} />
        <Filter onFilter={onFilter} filter={filter} />
        <TodoItems
          clearAllItemsCompleted={clearAllItemsCompleted}
          filter={filter}
          items={items}
          setItems={setItems}
          onDelete={onDelete}
          changeStatus={changeStatus}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
