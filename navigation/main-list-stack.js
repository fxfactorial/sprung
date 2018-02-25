import { StackNavigator } from 'react-navigation';

import colors from '../product/colors';
import fitnesslist from '../screens/available-fitness-list';
import fitnesslist_header_text from '../components/header-title';

export default StackNavigator(
  {
    'available-fitness-list': { screen: fitnesslist },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: fitnesslist_header_text,
      headerStyle: {
        backgroundColor: colors.main_theme_green,
      },
    }),
  }
);
