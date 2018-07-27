import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import Deck from './Deck';
import { gray } from '../utils/colors';
function AddCardButton({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
      onPress={onPress}>
      <Text style={styles.submitBtnText}>Add Card</Text>
    </TouchableOpacity>
  );
}

class ListDeck extends Component {
  onPressHandle() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View>
        <Text>LISTDECK:{JSON.stringify(item)}</Text>
        <Deck item={item} />
        <AddCardButton onPress={this.onPressHandle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    padding: 15
  }
});

export default ListDeck;
