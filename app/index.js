import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

import App from '../App';
import AppNavigator from './config/AppNavigator'



AppRegistry.registerComponent(appName, () => AppNavigator);