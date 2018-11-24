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

import AppNavigator from './AppNavigator';


class AppInit extends Component {
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