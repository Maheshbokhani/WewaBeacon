import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput } from 'react-native';

export default class Name_fill extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>
       <View style={{flex:0.3,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.text}> Hi, I am WEWA!{"\n"}and, you? </Text>
        </View>
        <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
          <TextInput style={styles.nameText} placeholderTextColor = "white" placeholder='Name / Nickname'></TextInput>
          <TextInput style={styles.surnameText} placeholderTextColor = "white" placeholder='Surname'></TextInput>
        </View>
        <View style={{flex:0.3,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.nextButton}> NEXT </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view:{
        flex:1,
    },
    text:{
        width:window.width,
        height:window.height,
        fontSize:35,
       fontWeight:'bold',
       color:'#5AA3FA',
       textAlign:'center'
    },
    nameText:{
        width:'90%',
        height:120,
        backgroundColor:'red',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'white',    
    },
    surnameText:{
        width:'90%',
        height:120,
        marginTop:20,
        backgroundColor:'#5AA3FA',
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'white',    
    },
    nextButton:{
        fontSize:30,
        color:'black',
        fontStyle:'italic',
        fontWeight:'bold',
        width:window.width,
        height:window.height,
    }
});