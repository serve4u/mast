'use strict';

import React, { Component,PropTypes } from 'react';

import {
  StyleSheet,
  ToolbarAndroid,
  Platform,
  View,
  Text
} from 'react-native';
import {NaviGoBack} from '../utils/CommonUtils';
import Button from './Button';
import ImageButton from './ImageButton';




let showActionButton=false;

const propTypes = {
  title:PropTypes.string,
  actions:PropTypes.array,
  navigator:PropTypes.object,
  onActionSelected: PropTypes.func,
  onIconClicked: PropTypes.func,
  navIcon:PropTypes.number
}
class ToolBar extends Component {
	constructor(props) {
  		super(props);
  		this.onIconClicked=this.onIconClicked.bind(this);
  		this.onActionSelected=this.onActionSelected.bind(this);
	}
	onIconClicked(){		
		if(this.props.onIconClicked){
			this.props.onIconClicked();
		}else{
			const {navigator} = this.props;
			var t=this.props;
			console.log(t)
			if (navigator) {
				NaviGoBack(navigator);
			}
		}
	}

	onActionSelected(position){
		this.props.onActionSelected();
	}

	renderToolbarAndroid(){
		return (
			<ToolbarAndroid
				style={styles.toolbar}
				actions={this.props.actions}
				onActionSelected={this.onActionSelected}
				onIconClicked={this.onIconClicked}
				navIcon={this.props.navIcon? this.props.navIcon :require('../img/icon_left.png')}
				titleCoLOR='#fff'
				title={this.props.title}
				/>
			);

	}

	renderToolbarIOS(){

	}

  render() {
  	let Toolbar = Platform.select({
  		android: () => this.renderToolbarAndroid(),
  		ios: () => this.renderToobarIOS()

  	})

    return <Toolbar />;
  }
}

const styles = StyleSheet.create({
	toolbar: {
		flexDirection: 'row',
		backgroundColor: '#3e9ce9',
		height: 58
	},
	titleIOS:{
		flex: 1,
		textAlign:'center',
		color: '#fff',
		fontSize:20,
		marginTop:25
	},
	leftISO: {
		height:15,
		width:25,
		marginTop:20,
		marginLeft:10
	},
	rightIOS: {
		justifyContent:'center',
		alignItems: 'center',
		marginTop: 20,
		marginRight: 10
	},
	rightText: {
		textAlign:'center',
		color: '#fff',
		fontSize:18
	}
});

ToolBar.propTypes = propTypes;
ToolBar.defaultProps={
	onActionSelected:function(){},
	title:'',
	actions: []
};

export default ToolBar;