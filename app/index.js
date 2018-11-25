import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';

import './global';  // 全局变量
import Root from './config/Root';


AppRegistry.registerComponent(appName, () => Root);