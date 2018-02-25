import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import CalendarBar from '../components/calendar-bar';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default class FitnessList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CalendarBar />
        <Text>Hi</Text>
      </View>
    );
  }
}
