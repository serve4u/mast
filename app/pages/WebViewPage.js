'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ToolBar from '../components/ToolBar';
import {NaviGoBack} from '../utils/CommonUtils';


var API_URL="http://op.juhe.cn/onebox/news/query";
var PARAMS ="?key=ef050feffac9f34643deca7349bea79b&dtype=json&q=";
var news=[{content:'sdfsdf'}];
class WebViewPage extends Component { 
	constructor(props) {
    	super(props);  
    	this.state = {
	      isShareModal: false,
        Article:{title:'',content:'sdfsdf'},
	    }; 
  }

  componentDidMount(){   

    this.fetchData();
  }
  fetchData(){
    const {navigator, route} = this.props;
    const keyWord=route.article;
    const REQUEST_URL=API_URL+PARAMS+keyWord;
    
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData,"yyy");
        news=responseData.result;
        this.setState({
        Article: responseData.result[0]
        });

      })
      .done();
  }



  render() {
    const {navigator, route} = this.props; 
    return (
      <View >
      	<ToolBar title="新闻详情"  navigator={navigator} />
        <Text style={styles.title}>{this.state.Article.title}</Text>
      	<Text style={styles.content}>{this.state.Article.content}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title:{
    marginTop:5,
    textAlign:'center',
    fontSize:16,
  },
  content:{
    marginTop:20,
    marginLeft:5,
    marginRight:5,
    fontSize:12,
    color:'#8d8d8d',
  }
})




export default WebViewPage;