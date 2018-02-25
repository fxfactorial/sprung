import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Title, Caption, Divider, Text, Button } from 'react-native-paper';

import colors from '../product/colors';

const styles = StyleSheet.create({
  card: { padding: 17 },
  kind_text: { color: colors.main_text_green, fontWeight: '900', fontSize: 17 },
  act_title: { fontSize: 26, fontWeight: 'bold' },
  act_top_row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  act_author_row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  act_author_circle: { borderRadius: 25, width: 50, height: 50 },
  act_author_name: { paddingLeft: 10, fontWeight: '800', fontSize: 18 },
  personalized: {
    color: colors.with_focus_orange,
    borderColor: colors.with_focus_orange,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontWeight: '900',
  },
  booking_block: { alignItems: 'center' },
  booking_block_button: {
    borderWidth: 2,
    width: '100%',
    borderColor: colors.main_theme_green,
  },
  booking_block_text: {
    color: colors.main_theme_green,
    fontWeight: 'bold',
    fontSize: 18,
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

const ActivityAuthor = ({ teacher_name, teacher_image_uri }) => (
  <View style={styles.act_author_row}>
    <Image style={styles.act_author_circle} source={{ uri: teacher_image_uri }} />
    <Title style={styles.act_author_name}>{teacher_name}</Title>
  </View>
);

const PurchaseBlock = ({ cost }) => (
  <View style={styles.booking_block}>
    <Caption>Book Class</Caption>
    <Button onPress={() => console.log('123')} style={styles.booking_block_button}>
      <Text style={styles.booking_block_text}>$ {cost}</Text>
    </Button>
  </View>
);

export default class SprungCard extends React.Component {
  render() {
    const { teacher_name, teacher_image_uri, cost, ...activity_data } = this.props;
    return (
      <Card elevation={5} style={styles.card}>
        <ActivityColumn {...activity_data} />
        <ActivityAuthor teacher_name={teacher_name} teacher_image_uri={teacher_image_uri} />
        <Divider inset={false} />
        <PurchaseBlock cost={cost} />
      </Card>
    );
  }
}
