import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title, Caption, Divider } from 'react-native-paper';

import colors from '../product/colors';

const styles = StyleSheet.create({
  card: { padding: 17 },
  kind_text: { color: colors.main_text_green, fontWeight: '900', fontSize: 17 },
  act_title: { fontSize: 26, fontWeight: 'bold' },
  act_top_row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  personalized: {
    color: colors.with_focus_orange,
    borderColor: colors.with_focus_orange,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontWeight: '900',
  },
});

const personalized = <Text style={styles.personalized}>Personalized</Text>;

const ActivityColumn = ({ kind, title, within_time, is_personalized }) => (
  <View>
    <View style={styles.act_top_row}>
      <Text style={styles.kind_text}>{kind}</Text>
      {is_personalized === false ? null : personalized}
    </View>
    <Title style={styles.act_title}>{title}</Title>
    <Caption>{within_time}</Caption>
  </View>
);

// const Author = ({teacher_name, teacher_image_uri}) => (

// )

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
