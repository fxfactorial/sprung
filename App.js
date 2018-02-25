// @flow
import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import RootNavigation from './navigation/root-navigation';

export default class SprungApplication extends Component {
  state = { application_loaded: false };

  componentDidMount() {
    this.setState(() => ({ application_loaded: true }));
  }

  render() {
    return <RootNavigation />;
  }
}
