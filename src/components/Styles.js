import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  titleInput: {
    textAlign: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
  },
  contentItems: {
    flex: 1,
    marginLeft: 10,
  },
  removeButton: {
    flexDirection: 'row-reverse',
  },
  flatListItems: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  filter: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  checkboxFalse: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  checkboxTrue: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  formInput: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btBorder: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  btBorderColor: {
    backgroundColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 10,
  },
  textColorWhite: {
    color: 'white',
  },
  textColorBlack: {
    color: 'black',
  },
});
