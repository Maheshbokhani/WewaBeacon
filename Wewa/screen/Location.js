/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { Config } from '@jest/types';

navigator.geolocation = require('@react-native-community/geolocation');

export default class Location extends Component {
  
  state = {
    latitute: 'unknown',
    longitute: 'unknown'
  };

  watchID: ?number = null;

      async  componentDidMount() {
      this.watchID = Geolocation.watchPosition(position => {
      const latitute = JSON.stringify(position.coords.latitude);
      this.setState({ latitute });
      const longitute = JSON.stringify(position.coords.longitude);
      this.setState({ longitute });
    });
  }

  async componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  render() {
    console.log('Location: ' + this.state.latitute + this.state.longitute);

    return (
      <View style={styles.view}>
        <Text style={styles.title}>
          Current Latitude: {this.state.latitute}
        </Text>
        <Text style={styles.title}>
          Current Longitude: {this.state.longitute}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
