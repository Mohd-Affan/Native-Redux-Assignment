import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Home from './src/screens/Home';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
