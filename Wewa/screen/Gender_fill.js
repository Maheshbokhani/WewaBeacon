import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Gender_fill extends Component {
    state = {
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} >

                <TouchableOpacity
                    style={{
                        width: '60%',
                        aspectRatio: 1,
                        backgroundColor: 'red',
                        justifyContent: 'center'
                    }}
                    onPress={() => Actions.bluetooth({ gender: "GIRL", nam: this.props.nam, surnam: this.props.surname })}
                >
                    <Text style={styles.buttonText}> GIRL </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '60%',
                        aspectRatio: 1,
                        backgroundColor: '#5AA3FA',
                        justifyContent: 'center',
                        marginTop: 20
                    }}
                    onPress={() => Actions.bluetooth({ gender: "GUY", nam: this.props.nam, surnam: this.props.surname })}
                >
                    <Text style={styles.buttonText}> GUY </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: '900'
    }
});
