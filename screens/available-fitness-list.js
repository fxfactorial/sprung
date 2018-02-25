import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import no_classes_available from '../components/no-classes-available';
import CalendarBar from '../components/calendar-bar';
import SprungCard from '../components/sprung-card';
import dummy_data from '../dummy-data';

const styles = StyleSheet.create({
  container: { flex: 1 },
  table: { backgroundColor: 'orange', flex: 1 },
  item_separator: { backgroundColor: 'aliceblue' },
});

const white_space = <View style={styles.item_separator} />;

export default class FitnessList extends React.Component {
  row_render() {
    return <SprungCard />;
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarBar />
        <FlatList
          ListEmptyComponent={no_classes_available}
          ItemSeparatorComponent={() => white_space}
          renderItem={this.row_render}
          keyExtractor={({ id }) => id}
          style={styles.table}
          data={dummy_data.card_data}
        />
      </View>
    );
  }
}
