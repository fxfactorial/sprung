import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import { observer } from 'mobx-react/native';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import application_styles from '../product/styles';
import colors from '../product/colors';
import { offerings_store } from '../state';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingVertical: '2%',
  },
  calendar_days_list: {
    paddingVertical: 10,
  },
  contentContainerStyle: {
    justifyContent: 'space-around',
    width: '125%',
  },
  today_style: { alignItems: 'center' },
  today_style_text: { fontSize: 20, fontWeight: 'bold' },
  today_style_selected: { color: colors.with_focus_orange },
});

export default observer(
  class CalendarSelectableBar extends React.Component {
    render_row({ item, index }) {
      const day_as_num = format(item.scheduled_date, 'D');
      const day_as_short_name = format(item.scheduled_date, 'ddd');
      const s = isToday(item.scheduled_date)
        ? [styles.today_style_text, styles.today_style_selected]
        : [styles.today_style_text];
      return (
        <View style={styles.today_style}>
          <Text style={s}>{day_as_num}</Text>
          <Text style={s}>{day_as_short_name}</Text>
        </View>
      );
    }

    render() {
      return (
        <View style={styles.container}>
          <Title>{format(offerings_store.offerings_date, 'MMMM')}</Title>
          <FlatList
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={this.render_row}
            keyExtractor={({ scheduled_date }) => scheduled_date.toString()}
            horizontal={true}
            data={offerings_store.sprung_offerings}
            style={styles.calendar_days_list}
          />
        </View>
      );
    }
  }
);
