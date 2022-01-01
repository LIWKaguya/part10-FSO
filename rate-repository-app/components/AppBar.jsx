import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "black",
    alignSelf: 'stretch'
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('hi')}>
        <Text style={styles.text}>
            Repositories
        </Text>
      </Pressable>
    </View>
  ); 
};

export default AppBar;