import React,{Component} from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './Wewa/screen/SplashScreen'
import Start from './Wewa/screen/Start'
import {name as appName} from './app.json';


export default class FlashScreen extends Component {
    constructor(props){
     super(props)
     this.state = {
      component : <Splash />
     }
    }
    componentDidMount(){
      this.timeoutHandle = setTimeout(()=>{
             this.setState({ component: <App/> })
        }, 3000
      );
   } 
   componentWillUnmount(){
        clearTimeout(this.timeoutHandle); 
   }
   render() {
   return (
     this.state.component
   );
}    
}


AppRegistry.registerComponent(appName, () => FlashScreen);