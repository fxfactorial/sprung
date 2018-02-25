import React from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'red' },
});

export default class SplashAnimation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Some animation</Text>
      </View>
    );
  }
}
