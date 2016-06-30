'use strict';

import React from 'react';
import { View,Navigator,TouchableOpacity,Text,StyleSheet} from 'react-native';
import thirdPageComponent from './thirdPageComponent';

class FirstPageComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={}
    
  }
  _pressButton(){
    const { navigator} =this.props
    if(navigator){
      navigator.push({
        name:'thirdPageComponent',
        constructor:thirdPageComponent,
      })
    }
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳转</Text>
      </TouchableOpacity>      
      </View>

      )
  }
}
export default FirstPageComponent;