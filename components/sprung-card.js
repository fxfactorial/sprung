import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';

import colors from '../product/colors';

const styles = StyleSheet.create({
  card: { padding: 20 },
  kind_text: { color: colors.main_text_green, fontWeight: '900', fontSize: 17 },
  activity_title: { fontSize: 22 },
  within_time: { color: 'grey' },
  activity_top_row: { flexDirection: 'row', justifyContent: 'space-between' },
  personalized: {
    color: colors.with_focus_orange,
    borderColor: colors.with_focus_orange,
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontWeight: '900',
  },
});

const personalized = <Text style={styles.personalized}>Personalized</Text>;

const ActivityColumn = ({ kind, title, within_time, is_personalized }) => (
  <View>
    <View style={styles.activity_top_row}>
      <Text style={styles.kind_text}>{kind}</Text>
      {is_personalized === false ? null : personalized}
    </View>
    <Title style={styles.activity_title}>{title}</Title>
    <Text style={styles.within_time}>{within_time}</Text>
  </View>
);

export default class SprungCard extends React.Component {
  render() {
    const { teacher_name, teacher_image_uri, cost, ...activity_data } = this.props;
    return (
      <Card elevation={5} style={styles.card}>
        <ActivityColumn {...activity_data} />
      </Card>
    );
  }
}
