import React from 'react';
import { StackNavigator } from 'react-navigation';

import fitnesslist from '../screens/available-fitness-list';
import ToolBar from '../components/toolbar';

export default StackNavigator(
  {
    'available-fitness-list': { screen: fitnesslist },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: () => <ToolBar navigation={navigation} />,
    }),
  }
);
