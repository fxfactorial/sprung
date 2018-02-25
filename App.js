// @flow
import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import RootNavigation from './navigation/root-navigation';
import SplashAnimation from './components/splash-animation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default class SprungApplication extends Component {
  state = { application_loaded: false };

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
  }

  componentDidMount() {
    this.setState(() => ({ application_loaded: true }));
  }

  render() {
    const { application_loaded } = this.state;
    if (application_loaded) {
      return (
        <PaperProvider theme={theme}>
          <RootNavigation />
        </PaperProvider>
      );
    } else {
      return <SplashAnimation />;
    }
  }
}
