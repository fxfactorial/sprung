// @flow
import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import RootNavigation from './navigation/root-navigation';
import SplashAnimation from './components/splash-animation';

export default class SprungApplication extends Component {
  state = { application_loaded: false };

  componentDidMount() {
    this.setState(() => ({ application_loaded: true }));
  }

  render() {
    const { application_loaded } = this.state;
    if (application_loaded) {
      return (
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      );
    } else {
      return <SplashAnimation />;
    }
  }
}
