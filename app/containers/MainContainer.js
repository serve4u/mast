'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

import ToolBar from '../components/ToolBar';
import WebViewPage from '../pages/WebViewPage';

var API_URL='http://op.juhe.cn/onebox/news/words';
var PARAMS = '?dtype=json&key=ef050feffac9f34643deca7349bea79b';
var REQUEST_URL=API_URL+PARAMS
let time = Date.parse(new Date()) / 1000;

class MainContainer extends Component {
	constructor(props) {
	    super(props);   //这一句不能省略，照抄即可	
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
        loaded: false,
      };
      this.renderNews = this.renderNews.bind(this);          
  	}

  componentDidMount() {     
   this.fetchData();
  }  

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
         dataSource: this.state.dataSource.cloneWithRows(responseData.result),
         loaded: true,
        });
      })
      .done();
  } 

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    } 
    return (
      <View>
        <ToolBar title="热点新闻" />    
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderNews}
           onScroll={this.onScroll}
          style={styles.listView}
          />
      </View> 
      
    ); 
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载数据……
        </Text>
      </View>
    );
  } 

  renderNews(News) {
    return (
      <TouchableOpacity  onPress={this.onPress.bind(this, News)}>       
          <View  style={styles.containerItem} >
            <Text style={styles.title}>{News}</Text> 
            <Text style={{flex: 1, flexDirection: 'column'}}>2016-02-18</Text>      
          </View>
      </TouchableOpacity>    
      
    );
  }
  

  onPress(article) {
    const {navigator} = this.props;     
     InteractionManager.runAfterInteractions(() => {
      navigator.push({
        component: WebViewPage,
        name: 'WebViewPage',
        article: article
      });
    });
  }



}

const styles = StyleSheet.create({
	container: {  
    	backgroundColor: '#F5FCFF',
 	 },
 	containerItem: {
	    flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#fcfcfc',
	    padding: 10,
	    borderBottomColor: '#ddd',
	    borderBottomWidth: 1
  	},
  	title:{
  		flex: 2,
  		flexDirection: 'column'
  	}
});


export default MainContainer;