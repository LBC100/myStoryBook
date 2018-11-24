import {
    createBottomTabNavigator,
} from 'react-navigation';

import Home from '../pages/Home';
import Setting from '../pages/Setting';


// 底部导航内容页及导航栏样式图标.
const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Setting: { screen: Setting },
    },
    {
        headerMode: 'none'
    }
);


export default BottomTabNavigator;