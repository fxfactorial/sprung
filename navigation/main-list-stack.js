import React from 'react';
import { StackNavigator } from 'react-navigation';

import fitnesslist from '../screens/available-fitness-list';
import session from '../screens/sprung-session';
import ToolBar from '../components/toolbar';

export default StackNavigator(
  {
    'available-fitness-list': { screen: fitnesslist },
    'sprung-session': { screen: session },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: () => <ToolBar navigation={navigation} />,
    }),
  }
);
