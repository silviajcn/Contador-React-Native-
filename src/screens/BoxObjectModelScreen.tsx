import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    paddingHorizontal: 60,
    marginHorizontal: 20,
    // backgroundColor: 'red',
  },
});