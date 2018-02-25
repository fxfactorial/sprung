import { DrawerNavigator } from 'react-navigation';

import main_list_stack from './main-list-stack';

export default DrawerNavigator({
  'home-screen': { screen: main_list_stack },
});
