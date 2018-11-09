/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import Login from './src/components/login';
import Lista from './src/components/lista';
import { createStackNavigator } from 'react-navigation';

type Props = {};

const RootStack = createStackNavigator(
  {
	TelaLogin: Login,
	TelaLista: Lista
  },
  {
	initialRouteName:'TelaLogin'  
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack/>;
  }
}


