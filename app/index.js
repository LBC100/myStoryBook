import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';

import './global';  // 全局变量
import AppInit from './config/AppInit'
import AppNavigator from './config/AppNavigator'

// 根必须为一个组件
class Index extends Component {
    render() { 
        return (
            <AppNavigator />
        );
    }
}


AppRegistry.registerComponent(appName, () => AppInit);