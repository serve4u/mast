'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
var Swiper = require('react-native-swiper');


var sliderImgs = [
'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Slider = React.createClass({
    render: function(){
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={80} showsPagination={false}>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
        <Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    );
  }
});

var toolbarActions =[
  {title: 'Create', show: 'always'},
  {title: 'Filter'},
  {title: 'Settings',  show: 'always'},
];

var BUIcon = [ 
 	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png', 
 	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png', 
 	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png', 
 	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png' 
]; 

class Rows extends Component {
  render() {
		return(
			<View style={[styles.rows,styles.sbu_blue,{backgroundColor:this.props.bgColor}]}>
				<TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}}>
					<View style={styles.rows_3}>
						<View style={styles.sub_con_flex}><Text style={styles.font14}>酒店</Text></View>
						<View style={styles.sub_con_flex}><Image style={styles.sbu_icon_img} source={{uri: BUIcon[0]}}/></View>
					</View>
				</TouchableHighlight>				
				<View style={styles.rows_3}>
					<View style={[styles.sub_con_flex,styles.sbu_borderLeft,styles.sbu_borderBottom]}><Text style={styles.font14}>海外</Text></View>
					<View style={[styles.sub_con_flex,styles.sbu_borderLeft]}><Text style={styles.font14}>周边</Text></View>
				</View>
			
				<View style={styles.rows_3}>
					<View style={[styles.sub_con_flex,styles.sbu_borderLeft,styles.sbu_borderBottom ]}><Text style={styles.font14}>团购.特惠</Text></View>
					<View style={[styles.sub_con_flex,styles.sbu_borderLeft]}><Text style={styles.font14}>客栈.公寓</Text></View>
				</View>				
			
			</View>
		)
	}
}

class layout extends Component {
  render() {
    return (
      <View>
    	<ToolbarAndroid  style={styles.toolbar}  title="首页"/>
    	  <Slider/>
    	  <Rows  bgColor="#FA6778"/>
    	  <Rows bgColor="#3D98FF"/>
    	 {/* <Rows  bgColor="#FC9720"/>
    	  <Rows  bgColor="#5EBE00"/>*/}
    	</View> 
    );
  }
}

const styles = StyleSheet.create({
 toolbar:{ 
 	backgroundColor: '#fff',
    height: 42,   
	},
 wrapper: {
 	height:80,
 	paddingLeft:5,
  	paddingRight:5,
  },
  slide: {
    height:80,
    resizeMode: Image.resizeMode.contain,
	},

  slide1: {  	
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {  	
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  rows:{
  	flex:1,
  	height:64,
  	flexDirection:'row',
  	backgroundColor:'#3D98FF',
  	borderRadius:5,
  	marginLeft:5,
  	marginRight:5,
  	marginBottom:5,
  },
  rows_3:{
  	flex:1, 
  },
  sub_con_flex:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
  sbu_borderBottom:{
  	borderBottomWidth:0.5,
  	borderBottomColor:'#fff',
  },
  sbu_borderLeft:{
  	borderLeftWidth:0.5,
  	borderLeftColor:'#fff',
  },
  sbu_icon_img:{
    height:40,
    width:40,
    resizeMode:Image.resizeMode.contain,
},
font14:{
    fontSize:14,
    color:'#FFF',
    fontWeight:'900',
},


  


});


export default layout;

