'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import Splash from '../pages/Splash';

var _navigator, isRemoved = false;

class App extends React.Component {
  constructor(props){
    this.renderScene= this.renderScene.bind(this);
    this.goBack= this.goBack.bind(this);
    BackAndroid.addEventListener('hardwareBackPress',this.goBack);    
  }

  goBack(){
    return NaviGoBack(_navigator);
  }

  renderScene(route,navigator) {
    let Component = route.component;
    _navigator=navigator;
    if(route.name==='WebViewPage') {
      BackAndroid.removeEventListenner('hardwareBackPress',this.goBack);
      isRemoved=true;
    } else {
      if(isRemoved) {
          BackAndroid.addEventListener('hardwareBackPress',this.goBack);
      }
    }
    return (
      <Component navigator={navigator} route={route} />
      );
  }

  configureScene(route,routeStack){
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <View style-{{flex:1}}>
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
      </View>

      )
  }
}

let styles= StyleSheet.Creat({
  navigator: {
    flex:1
  }
});

export default App;