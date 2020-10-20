import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FILTER} from '../../App';
import Styles from './Styles';
const Filter = ({filter, onFilter}) => {
  return (
    <View style={Styles.filter}>
      <TouchableOpacity
        style={filter === FILTER.ALL ? Styles.btBorderColor : Styles.btBorder}
        onPress={() => {
          onFilter(FILTER.ALL);
        }}>
        <Text
          style={
            filter === FILTER.ALL
              ? Styles.textColorWhite
              : Styles.textColorBlack
          }>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          filter === FILTER.COMPLETE ? Styles.btBorderColor : Styles.btBorder
        }
        onPress={() => {
          onFilter(FILTER.COMPLETE);
        }}>
        <Text
          style={
            filter === FILTER.COMPLETE
              ? Styles.textColorWhite
              : Styles.textColorBlack
          }>
          Complete
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          filter === FILTER.ACTIVE ? Styles.btBorderColor : Styles.btBorder
        }
        onPress={() => {
          onFilter(FILTER.ACTIVE);
        }}>
        <Text
          style={
            filter === FILTER.ACTIVE
              ? Styles.textColorWhite
              : Styles.textColorBlack
          }>
          Active
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Filter;
