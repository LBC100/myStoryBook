import { createStackNavigator } from 'react-navigation';

import AppInit from './AppInit'
import BottomTabNavigator from './BottomTabNavigator'; //导航栏
import Inputs from '../pages/Inputs' //输入框
import Translucent from '../pages/Setting/Translucent' //沉浸式
import NavBarPage from '../pages/Home/NavBarPage' //沉浸式



export default createStackNavigator(
    {
        // AppInit: { screen: AppInit },
        BottomTabNavigator: { screen: BottomTabNavigator },
        Inputs: { screen: Inputs },
        Translucent: { screen: Translucent },
        NavBarPage: { screen: NavBarPage },
    },
    {
        headerMode: 'none',
        // initialRouteName: 'AppInit',
    }
);