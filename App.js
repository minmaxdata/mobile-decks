import React from 'react';
import { View, StatusBar } from 'react-native';
import { purple } from './utils/colors';
import { Constants } from 'expo';
import { setLocalNotification } from './utils/helpers'
import MainTabNavigator from './navigation/MainTabNavigator';

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.StatusBar }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainTabNavigator />
      </View>
    );
  }
}
