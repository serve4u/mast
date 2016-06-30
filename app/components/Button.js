'use strict';

import React, { Component,PropTypes}from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	style: Text.propTypes.style,
	containerStyle: View.propTypes.style,
	text: PropTypes.string
}

class Button extends Component {
  constructor(props) {
	  super(props);
	
	  this.onPress = this.onPress.bind(this);
	}	
  onPress() {
  	if(this.props.disabled){
  		return
  	}
  	this.props.onPress();
  }	

  render() {
    return (
    	<TouchableOpacity
    		style={this.props.containerStyle}
    		onPress={this.onPress}>
    		<Text style={this.props.style}>
    			{this.props.text}
    		</Text>	
    	</TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({

});


export default Button;