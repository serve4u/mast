'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  Text,
  View
} from 'react-native';

import Splash from '../pages/Splash';
import {NaviGoBack} from '../utils/CommonUtils';


var _navigator, isRemoved = false;

class App extends React.Component { 
  constructor(props) {
      super(props);      
      this.renderScene = this.renderScene.bind(this);
      this.goBack = this.goBack.bind(this);
      BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
  renderScene(route, navigator){
     let Component = route.component;
     _navigator = navigator;
    if (route.name === 'WebViewPage') {
      BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
      isRemoved = true;
    } else {
      if (isRemoved) {
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
      }
    }
    return (
      <Component navigator={navigator} route={route} />
    );
  }  
  goBack(){
    return NaviGoBack(_navigator);
  }
  render() {
    return (
      <View style={{flex:1}}>
         <StatusBar
           backgroundColor="#3e9ce9"
           barStyle="default"
         />

         <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
        />
       
      </View>

      )
  }
};


const styles = StyleSheet.create({
  navigator: {
    flex: 1,   
  }
});

export default App;