import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { getDecks, clearStorage } from '../utils/api';
import { AppLoading } from 'expo';
import Deck from './Deck';

export default class ListDecks extends Component {
  state = { ready: false, decks: {} };
  componentDidMount() {
    clearStorage();
    getDecks()
      .then(results => {
        this.setState({ decks: results });
      })
      .then(() =>
        this.setState(() => ({
          ready: true
        }))
      );
  }
  componentDidUpdate(prevState, prevProps) {
    if (prevState !== this.state) {
      getDecks().then(results => {
        this.setState({ decks: results });
      });
    }
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('ListDeck', { deck: item })
        }>
        <Deck deck={item} />
      </TouchableOpacity>
    );
  };
  render() {
    const { ready, decks } = this.state;

    //console.log("ListDecks", Object.keys(decks).length);
    if (ready === false) {
      return <AppLoading />;
    }
    if (Object.keys(decks).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>No Flashcards are Available</Text>
        </View>
      );
    }
    const data = Object.values(decks);

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  title: {
    fontSize: 24
  }
});
