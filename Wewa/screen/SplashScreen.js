import React, { Component } from 'react';
import { View, StyleSheet, Text,Animated, Easing,NativeModules } from 'react-native';

module.exports

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinValue: new Animated.Value(0)
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.spinValue,                                   // The animated value to drive
            {
                toValue: this.props.toValue || 20,                   // Animate to 360/value
                duration: this.props.duration || 120000,              // Make it take a while
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start(this.props.onFinishedAnimating);                    // Starts the animation
    }

    render() {
        var data = this.props.value;
        console.log(data);
        let spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']});
        return (
            <View style={styles.view}>
                <View style={styles.textView}>
                <Text style={styles.text}>WEWA</Text>
                <Animated.Image
                    style={{ transform: [{ rotate: spin }], height: 55, width: 55,marginBottom: 90,marginLeft: -20, }}
                    source={require("../asserts/images/logo.png")} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ff8b72'
    },
    textView:{
        flex:0.9,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        width: window.with,
        height: window.height,
        fontSize: 80,
        color: '#ffe0db',
        fontWeight: 'bold',
       
    },
});