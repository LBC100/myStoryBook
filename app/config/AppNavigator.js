import { createStackNavigator } from 'react-navigation';

// import AppInit from './AppInit'
import BottomTabNavigator from './BottomTabNavigator'; // 底部导航栏

// 组件
import NavBarPage from '../components/NavBar/NavBarPage'

import Inputs from '../pages/Inputs' //输入框
import Translucent from '../pages/Setting/Translucent' //沉浸式




export default createStackNavigator(
    {
        // AppInit: { screen: AppInit },
        BottomTabNavigator: { screen: BottomTabNavigator },

        NavBarPage: { screen: NavBarPage }, // 沉浸式头部NavBar
        
        Inputs: { screen: Inputs },
        Translucent: { screen: Translucent },
        
    },
    {
        headerMode: 'none',
        // initialRouteName: 'NavBarPage',
    }
);