import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBarImage from '../../components/NavBarImage'
import NavBar from '../../components/NavBar'


class NavBarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    static navigationOptions = {
        title: '组件',
    };


    render() {
        const { navigation } = this.props;
        return (
            <View>
                <NavBar
                    statusBarbackgroundColor={'rgba(66,175,240,.2)'}
                    leftComponent
                    centerComponent={ { text: '首页', style: {color: 'red'} } } />
                
                <Card title='NavBar'>
                    <Text style={{marginBottom: 10}}>
                        {'基于StatusBarAutoHeighe沉浸式状态栏组件. 全局搜索 NavBar组件 找到此组件'}
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        {` <NavBar statusBarbackgroundColor={'rgba(66,175,240,.2)'} leftComponent centerComponent={ { text: '首页', style:  {color: 'red'} } }  /> `}  
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        {`传入对象 leftComponent={ { text: '左边', style: {color: '#fff'} } }`}
                    </Text>
                    
                </Card>
            </View>
        );
    }
}
 
export default NavBarPage;