import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class Gender_fill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} >
                <TouchableOpacity style={{width:'60%',aspectRatio: 1,backgroundColor:'red',justifyContent:'center'}}>
                    <Text style={styles.buttonText}> GIRL </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'60%',aspectRatio: 1,backgroundColor:'#5AA3FA',justifyContent:'center',marginTop:20}}>
                    <Text style={styles.buttonText}> GUY </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttonText:{
        textAlign:'center',
        fontSize:40,
        color:'white',
        fontWeight:'900'
    }
});
