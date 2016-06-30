'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  Text,
  Linking,
  View,
} from 'react-native';

import ToolBar from '../components/ToolBar';
import DeviceInfo from 'react-native-device-info';

class About extends Component {
	constructor(props) {
	  super(props);	
	}
 	onPress(url) {
    	Linking.openURL(url);
  	}
  render() {
  	console.log(DeviceInfo);
    return (
      <View style={styles.content}>
      	<ToolBar title="关于" />
      	<View style={{flex:1,alignItems: 'center' ,paddingTop:20}}>
      		<Image
      			Style={{width:110,height:110,marginTop:50}}
      			source={require('../img/about_logo.png')}
      		/>
      		 <Text style={{fontSize: 16, textAlign: 'center', color: '#aaaaaa', marginTop: 5}}>
              {'v' + "10.0.0.5"}
            </Text>
            <Text style={{fontSize: 28, textAlign: 'center', color: '#313131', marginTop: 10}}>
              Reading
            </Text>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#4e4e4e'}}>
              让生活更精彩
            </Text>	
      	</View>

      	<View style={{alignItems: 'center'}}>
      		<View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, textAlign: 'center', color: '#aaaaaa'}}>
                免责声明：所有内容均来自
              </Text>
             
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, textAlign: 'center', color: '#aaaaaa'}}>
                @Reading Team：
              </Text>
              
            </View>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    paddingBottom: 10
  }
});


export default About;