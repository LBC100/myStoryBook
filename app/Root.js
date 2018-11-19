import React, { Component } from 'react';

import AppNavigator from './config/AppNavigator';
// import SplashScreen from "react-native-splash-screen";

class Root extends Component {
    componentDidMount() {
        // SplashScreen.hide(); // 隐藏启动屏
    }
    render() { 
        return (
            <AppNavigator />
        );
    }
}
 
export default Root;