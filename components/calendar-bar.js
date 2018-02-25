import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import application_styles from '../product/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingVertical: '2%',
  },
});

export default class CalendarSelectableBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Feburary</Text>
        <View>
          <View>
            <Text>12</Text>
            <Text>Monday</Text>
          </View>
        </View>
      </View>
    );
  }
}
