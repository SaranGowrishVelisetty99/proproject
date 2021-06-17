import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './screens/welcomescreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import { AppTabNavigator } from './components/apptabnavigator';

export default class App extends React.Component{
  render() {
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  BottomTab: {screen: AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
