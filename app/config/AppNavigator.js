import { createStackNavigator } from 'react-navigation';

import bottomTabNavigator from './bottomTabNavigator'; //导航栏
import Inputs from '../pages/Inputs' //输入框
import Translucent from '../pages/Setting/Translucent' //沉浸式
import NavBarPage from '../pages/Home/NavBarPage' //沉浸式



export default createStackNavigator(
    {
        bottomTabNavigator: { screen: bottomTabNavigator },
        Inputs: { screen: Inputs },
        Translucent: { screen: Translucent },
        NavBarPage: { screen: NavBarPage },
    },
    {
        headerMode: 'none'
    }
);