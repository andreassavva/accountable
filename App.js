import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Layout from './app/components/Layout/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Layout />
    );
  }
}
