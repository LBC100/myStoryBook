/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 15:26:23 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-23 16:42:02
 * 
 * 依赖库 react-native-iphone-x-helper
 */
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';


class StatusBarAutoHeight extends Component {
    static navigationOptions = {
        title: 'NavBar',
    };

    _getHeight = () => {
        let appHeight = 0;
        if(Platform.OS === 'android' && Platform.Version > 19) {
            // 4.4以上系统才有自定义状态栏
            appHeight = StatusBar.currentHeight;
        }else if(isIphoneX()){
            appHeight = 44;
        }else if(Platform.OS === 'ios'){
            appHeight = 20;
        }
        return appHeight
    }
    render() {
        const { backgroundColor } = this.props;
        // console.log('状态栏高度',StatusBar.currentHeight);
        return (
            <View style={{height: this._getHeight(), backgroundColor: backgroundColor? backgroundColor : '#fff',}}>

            </View>
        );
    }
}
 
export default StatusBarAutoHeight;