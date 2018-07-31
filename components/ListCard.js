import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListCard extends Component {
  state = {
    question: '',
    answer: '',
    uuid: ''
  };
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View>
        <Text>List Card --{JSON.stringify(item)}</Text>
      </View>
    );
  }
}
export default AddCard;
