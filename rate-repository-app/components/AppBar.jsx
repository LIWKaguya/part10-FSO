import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    margin: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      <View style={{flex : 1}}>
        <Link to='/'>
          <Text style={styles.text}>
            Repositories
          </Text>
        </Link>
      </View>
      <View style={{flex: 1}}>
        <Link to='/login'>
          <Text style={styles.text}>
            Login
          </Text>
        </Link>
      </View>
      </ScrollView>
    </View>
  ); 
};

export default AppBar;