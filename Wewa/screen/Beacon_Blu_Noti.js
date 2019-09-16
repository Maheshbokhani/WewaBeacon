import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Beacon_Blu_Noti extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount(){  }

  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
         <Text style={{textAlign:'center',fontSize:20,color:'black'}}> Name: {this.props.nam} {this.props.surnam} </Text>
        <Text style={{textAlign:'center',fontSize:20,color:'black'}}> Gender: {this.props.gender} </Text>
      </View>
    );
  }
}
