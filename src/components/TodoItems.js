import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {FILTER} from '../../App';
import Styles from './Styles';
const TodoItems = ({
  items,
  onDelete,
  changeStatus,
  filter,
  setItems,
  clearAllItemsCompleted,
}) => {
  const filteredItems = () => {
    switch (filter) {
      case FILTER.ALL: {
        return items;
      }
      case FILTER.ACTIVE: {
        return items.filter((item) => item.status !== true);
      }
      case FILTER.COMPLETE: {
        return items.filter((item) => item.status === true);
      }

      default:
        break;
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={Styles.item}>
        <TouchableOpacity onPress={() => changeStatus(item.id)}>
          <View
            style={item.status ? Styles.checkboxTrue : Styles.checkboxFalse}
          />
        </TouchableOpacity>
        <Text style={Styles.contentItems}>{item.content} </Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={Styles.flatListItems}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={filteredItems()}
        renderItem={renderItem}
      />
      {items.length !== 0 ? (
        <View style={Styles.removeButton}>
          <TouchableOpacity onPress={() => clearAllItemsCompleted()}>
            <Text>Clear all completed</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default TodoItems;
