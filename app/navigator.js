'use strict';

import React from 'react';
import { View,Navigator,BackAndroid,Text,StyleSheet} from 'react-native';
import SecondPageComponent from './SecondPageComponent';
import FirstPageComponent from './FirstPageComponent';
import thirdPageComponent from './thirdPageComponent';

class Nav extends React.Component { 

  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
     <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} 
      />
    );
      
  }
}
export default Nav;