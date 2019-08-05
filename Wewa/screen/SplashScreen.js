import React, { Component } from 'react';
import { View, StyleSheet, Text,Animated, Easing } from 'react-native';

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
                toValue: this.props.toValue || 5,                   // Animate to 360/value
                duration: this.props.duration || 18000,              // Make it take a while
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start(this.props.onFinishedAnimating);                    // Starts the animation
    }

    render() {
        let spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']});
        return (
            <View style={styles.view}>
                <View style={styles.textView}>
                <Animated.Image
                    style={{ transform: [{ rotate: spin }], height: 70, width: 70,marginLeft:220 }}
                    source={{ uri: "http://pluspng.com/img-png/flower-png-dahlia-flower-png-transparent-image-1644.png" }} />
                    <Text style={styles.text}>WEWA</Text>
                </View>
                <View style={styles.versionView}>
                <Text style={styles.version}> versiyon 1.0 </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
    textView:{
        flex:0.9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        width: window.width,
        height: window.height,
        fontSize: 70,
        color: 'darkred',
        fontWeight: 'bold',
        marginTop:-30
    },
    versionView:{
        flex:0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    version:{
        textAlign:'center',
        width: 250,
        height: 30,
        fontSize:20,
        color:"black", 
    }
});