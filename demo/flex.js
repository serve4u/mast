'use strict';

//import React from 'react';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


/***************写法一***************/

var flex = React.createClass({
	render:function(){
		console.log(StyleSheet);
		return(
			<View style={styles.style_0}>
				<View style={styles.style_1}>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>				
				</View>
				<View style={[styles.style_1,{flexDirection:'column'}]}>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>
					<Text style={{marginTop:20, fontSize:25}}>1／4高</Text>				
				</View>
				<View style={{flex:10, borderWidth: 1, borderColor: 'red',}}>
					<Text style={{marginTop:20, fontSize:25}}>1／2高</Text>								
				</View>
			</View>
			)
	}
})

const styles=StyleSheet.create({
	style_0:{
		flex:1,
	},
	style_1:{
		flex:5,
		flexDirection:'row',
		height:40,
		borderWidth:1,
		borderColor:'red',
	},
	left:{
		alignSelf:'flex-start'
	},
	center:{
		alignSelf:'center'
	},
	right:{
		alignSelf:'flex-end'
	},
	stretch:{
		alignSelf:'stretch'
	}	

})

/***************写法二***************/
/*class layout extends Component {
  render() {
    return (
      <View>
		<View style={{height:40, borderWidth: 1, borderColor: 'red'}}>
		<Text>{"sds"}</Text>
		
		</View>
	</View>
    );
  }
}*/
export default flex;