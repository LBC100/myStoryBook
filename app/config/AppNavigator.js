import { createStackNavigator } from 'react-navigation';

import bottomTabNavigator from './bottomTabNavigator';
import Inputs from '../pages/Inputs' //输入框


export default createStackNavigator(
    {
        bottomTabNavigator: { screen: bottomTabNavigator },
        Inputs: { screen: Inputs },
    },
    {
        headerMode: 'none'
    }
);