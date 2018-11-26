import { createStackNavigator } from 'react-navigation';

// import AppInit from './AppInit'
import BottomTabNavigator from './BottomTabNavigator'; // 底部导航栏

// 组件
import NavBarPage from '../components/NavBar/NavBarPage'
import VerifiCodeBtnPage from '../components/VerifiCodeBtn/VerifiCodeBtnPage'

import InputPage from '../components/Input/InputPage' //输入框
import Translucent from '../pages/Setting/Translucent' //沉浸式




export default createStackNavigator(
    {
        // AppInit: { screen: AppInit },
        BottomTabNavigator: { screen: BottomTabNavigator },

        NavBarPage: { screen: NavBarPage }, // 沉浸式头部NavBar
        VerifiCodeBtnPage: { screen: VerifiCodeBtnPage }, // 验证码

        InputPage: { screen: InputPage },
        Translucent: { screen: Translucent },
        
    },
    {
        headerMode: 'none',
        // initialRouteName: 'NavBarPage',
    }
);