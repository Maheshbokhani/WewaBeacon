import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <ImageBackground source={require('../asserts/images/screen02/xxhdpi/offer_bg.png')}
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', alignContent: 'space-around' }}>
          <View style={styles.view_image}>

            <Text style={styles.firstText}> BE AWARE OF THE {"\n"} OFFERS ALL ARROUND YOU </Text>

            <Text style={styles.secondText}> YOU DON'T WANT TO MISS {"\n"} THE BEST DEAL </Text>

            <TouchableOpacity style={styles.button} onPress={() => Actions.name()}>
              <Text style={styles.buttonText}> LET'S START</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'space-around',
  },
  button: {
    width: '70%',
    height: 60,
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#ff8b72',
    fontWeight: 'bold',
  },
  firstText: {
    width: '100%',
    height: window.height,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  secondText: {
    width: '100%',
    height: window.height,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: '#ffffff'
  },
  view_image: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
    position: 'absolute'
  }
});