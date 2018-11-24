import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

import './global';  // 全局变量
import AppInit from './config/AppInit'



AppRegistry.registerComponent(appName, () => AppInit);