import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Start from './Wewa/screen/Start'
import Name from './Wewa/screen/Name_fill'
import Gender from './Wewa/screen/Gender_fill'
import Bluetooth from './Wewa/screen/Location'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="start"
            component={Start}
            hideNavBar
            initial
          />
          <Scene key="name"
            component={Name}
            hideNavBar
          />
          <Scene key="gender"
            component={Gender}
            hideNavBar
          />
          <Scene key="bluetooth"
            component={Bluetooth}
            hideNavBar
          />
        </Scene>
      </Router>
    )
  }
}


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });


