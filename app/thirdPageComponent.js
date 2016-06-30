'use strict';

import React from 'react';
import { View,Navigator,TouchableOpacity,Text,StyleSheet} from 'react-native';

class thirdPageComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={}
    
  }
  _pressButton(){
    const { navigator} =this.props
    if(navigator){
      navigator.pop()
    }
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳转11</Text>
      </TouchableOpacity>      
      </View>

      )
  }
}
export default thirdPageComponent;