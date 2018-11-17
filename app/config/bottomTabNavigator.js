import {
    createBottomTabNavigator,
} from 'react-navigation';

import Home from '../pages/Home';
import Account from '../pages/Account'

// 底部导航内容页及导航栏样式图标.
const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Account: { screen: Account },
    },
    {
        headerMode: 'none'
    }
);


export default bottomTabNavigator;