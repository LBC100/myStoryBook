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

import AppNavigator from './config/AppNavigator';


class Root extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
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
 
export default Root;