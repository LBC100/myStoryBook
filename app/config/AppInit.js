import React, { Component } from 'react';
import SplashScreen from "react-native-splash-screen";
import {
    StyleSheet,
    BackHandler,
    View,
    ToastAndroid,
    AsyncStorage,
    Dimensions,
    ActivityIndicator,
    StatusBar,
    Platform
} from 'react-native';


import AppNavigator from './AppNavigator'


class AppInit extends Component {

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
    // }
    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    // }

    // _onBackAndroid = () => {
    //     console.log(this.props)
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //         //最近2秒内按过back键，可以退出应用。
    //         BackHandler.exitApp();
    //         return false;
    //     }
    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     return true;
    // };

    componentDidMount() {
        // 沉浸式
        // StatusBar.setBarStyle('light-content');  //白色
        StatusBar.setBarStyle('dark-content'); //黑色
        Platform.OS == 'android' ? StatusBar.setBackgroundColor('rgba(66,175,240,.0)') : '';
        Platform.OS == 'android' ? StatusBar.setTranslucent(true) : '';
        SplashScreen.hide(); // 隐藏启动屏
    }
    render() { 
        return (
            <AppNavigator />
        );
    }
}
 
export default AppInit;