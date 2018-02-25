import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Text>No sprung fitness available yet</Text>
  </View>
);
