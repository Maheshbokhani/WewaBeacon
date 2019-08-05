import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> LET'S START</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'lightpink',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    button:{
        marginBottom:60,
        width:'80%',
        height:70,
        backgroundColor:'red',
        justifyContent:'center'
    },
    buttonText:{
        textAlign:'center',
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    }

});