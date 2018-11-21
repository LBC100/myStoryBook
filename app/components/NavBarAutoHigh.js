/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 15:26:23 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-21 16:02:31
 * 
 * 依赖库 react-native-iphone-x-helper
 */
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';


class NavBarAutoHigh extends Component {
    static navigationOptions = {
        title: 'NavBar',
    };

    _getHeight = () => {
        let appHeight = 0;
        if(Platform.OS === 'android') {
            appHeight = StatusBar.currentHeight;
        }else if(isIphoneX()){
            appHeight = 44;
        }else {
            appHeight = 20;
        }
        return appHeight
    }
    render() {
        const { backgroundColor } = this.props;
        // console.log('状态栏高度',StatusBar.currentHeight);
        return (
            <View style={{height: this._getHeight(), backgroundColor: backgroundColor? backgroundColor : '#ccc',}}>

            </View>
        );
    }
}
 
export default NavBarAutoHigh;