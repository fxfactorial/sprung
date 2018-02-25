import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { observer } from 'mobx-react/native';

import { offerings_store } from '../state';
import no_classes_available from '../components/no-classes-available';
import CalendarBar from '../components/calendar-bar';
import SprungCard from '../components/sprung-card';

const styles = StyleSheet.create({
  container: { flex: 1 },
  table: { flex: 1, paddingTop: 15, paddingHorizontal: 10 },
  item_separator: { backgroundColor: 'transparent', height: 15 },
});

const white_space = <View style={styles.item_separator} />;

export default observer(
  class FitnessList extends React.Component {
    row_render(navigation, { item, index }) {
      return <SprungCard {...item} navigation={navigation} />;
    }

    render() {
      const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <CalendarBar />
          <FlatList
            ListEmptyComponent={no_classes_available}
            ItemSeparatorComponent={() => white_space}
            renderItem={this.row_render.bind(null, navigation)}
            keyExtractor={({ id }) => id}
            style={styles.table}
            data={offerings_store.todays_offerings}
          />
        </View>
      );
    }
  }
);
