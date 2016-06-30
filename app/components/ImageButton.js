'use strict';

import React, { PropTypes,Component } from 'react';

import {  
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	source: PropTypes.oneOfType([
		PropTypes.shape({
			uri:PropTypes.string,
		}),
		PropTypes.number,
	]),
	style: View.propTypes.style,
	containerStyle:View.propTypes.style
}

class ImageButton extends Component {
	constructor(props) {
	  super(props);
	
	  this.onPress = this.onPress.bind(this);
	}

	onPress() {
		if(this.props.disabled) {
			return
		}
		this.props.onPress();
	}
  render() {
    return (
    	<TouchableOpacity
    		style={this.props.containerStyle}
    		onPress={this.onPress}>
    		<Image
    			style={this.props.style}
    			source={this.props.source}
    			/>
    	</TouchableOpacity>     
    );
  }
}

ImageButton.propTypes = propTypes;
ImageButton.defaultProps = {
	onPress:function(){},
	disbled:false
}


export default ImageButton;