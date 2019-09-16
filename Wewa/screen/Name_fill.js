import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Name_fill extends Component {

  state = {
    name: '',
    surname: ''
  };


  render() {
    return (
      <View style={styles.view}>
        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}> Hi, I am WEWA!{"\n"}and, you? </Text>
        </View>
        <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            style={styles.nameText}
            placeholderTextColor="white"
            placeholder='Name / Nickname'>
          </TextInput>
          <TextInput
            onChangeText={surname => this.setState({ surname })}
            value={this.state.surname}
            style={styles.surnameText}
            placeholderTextColor="white"
            placeholder='Surname'>
          </TextInput>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => Actions.gender({ nam: this.state.name, surname: this.state.surname })}>
            <Text style={styles.nextButton}> NEXT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    width: window.width,
    height: window.height,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#5AA3FA',
    textAlign: 'center'
  },
  nameText: {
    width: '80%',
    height: 120,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  surnameText: {
    width: '80%',
    height: 120,
    marginTop: 20,
    backgroundColor: '#5AA3FA',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  nextButton: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
    width: window.width,
    height: window.height,
  }
});