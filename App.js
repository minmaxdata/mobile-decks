import React from 'react';
import { Text, View, Platform, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import ListDecks from './components/ListDecks';
import ListDeck from './components/ListDeck';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import QuizDeck from './components/QuizDeck';
import { purple, white } from './utils/colors';
import { Constants } from 'expo';

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.StatusBar }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}
const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: ListDecks,
      navigationOptions: {
        tabBarLabel: 'List Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);
const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  ListDeck: {
    screen: ListDeck,
    navigationOptions: {
      title: 'Flashcard',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: 60,
        marginTop: -20
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: 60,
        marginTop: -20
      }
    }
  },
  QuizDeck: {
    screen: QuizDeck,
    navigationOptions: {
      title: 'Quiz Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        height: 60,
        marginTop: -20
      }
    }
  }
});
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
