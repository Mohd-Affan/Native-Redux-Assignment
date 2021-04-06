import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/index';
import Home from './src/screens/Home';
import TabNav from './src/navigate/TabNav';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
