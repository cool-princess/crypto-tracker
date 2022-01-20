import React from 'react';
import Header from './../../components/Header';
import {    StyleSheet, View } from 'react-native';
import Body from './../../components/Body';
import ListView from './components/ListView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header pageName="DASHBOARD"/>
      <Body>
        <ListView /> 
      </Body>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
