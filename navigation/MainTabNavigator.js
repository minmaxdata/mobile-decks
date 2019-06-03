import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import ListDecks from '../screens/ListDecks';
import ListDeck from '../screens/ListDeck';
import AddDeck from '../screens/AddDeck';
import AddCard from '../screens/AddCard';
import QuizDeck from '../screens/QuizDeck';
import { purple, white } from '../utils/colors';

const Tabs = createBottomTabNavigator(
    {
        Decks: {
            screen: ListDecks,
            navigationOptions: {
                tabBarLabel: 'List Decks',
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="list" size={30} color={tintColor} />
                )
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: 'Add Deck',
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="add-to-list" size={30} color={tintColor} />
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
const ListDecksStack = createStackNavigator({
    Decks: ListDecks
});
ListDecksStack.navigationOptions = {

};
export default MainStackNavigator = createStackNavigator({
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