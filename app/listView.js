'use strict';

import React from 'react';
import { View,Text,ListView,StyleSheet} from 'react-native';


class dataList extends React.Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});//创建一个ListView.DataSource数据源
    this.state = {
    dataSource: ds.cloneWithRows([{id:1,title:"头条123",content:"内容123456789"}, {id:2,title:"头条456",content:"内容0987654"}]),
     //dataSource: ds.cloneWithRows(['row 1', 'row 2']),

    };//传递一个普通的数据数组，再使用数据源来实例化一个ListView组件
  }

  renderRow(rowData,sectionID,rowID){
    return (
        <View>
          <Text>{rowData.title}</Text>
        </View>  
        )
  }

  render(){
    return(
      <ListView
        ref="listview"        
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}      
      />
      )    
     
     
  }
}

export default dataList;