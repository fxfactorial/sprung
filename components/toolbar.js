import React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarAction, ToolbarContent } from 'react-native-paper';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { observer } from 'mobx-react/native';

import { nav_store } from '../state';
import application_styles from '../product/styles';

const styles = StyleSheet.create({
  toolbar_title: {},
});

export default observer(
  class extends React.Component {
    open_drawer = () => {
      const { navigation } = this.props;
      navigation.navigate('DrawerOpen');
    };

    render() {
      return (
        <Toolbar
          statusBarHeight={Platform.OS === 'ios' ? 20 : StatusBar.currentHeight}
          style={application_styles.toolbar}>
          {nav_store.drawer_button_shows ? (
            <ToolbarAction icon={'menu'} onPress={this.open_drawer} />
          ) : null}
          <ToolbarContent
            style={styles.toolbar_title}
            title={nav_store.title}
            titleStyle={application_styles.stack_navigator_header_text}
          />
        </Toolbar>
      );
    }
  }
);
