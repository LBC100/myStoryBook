import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '组件',
    };
    render() {
        return (
            <View>
                <Text>我是首页</Text>
            </View>
        );
    }
}
 
export default Home;