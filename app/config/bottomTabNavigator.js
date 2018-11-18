import {
    createBottomTabNavigator,
} from 'react-navigation';

import Home from '../pages/Home';

// 底部导航内容页及导航栏样式图标.
const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home },
    },
    {
        headerMode: 'none'
    }
);


export default bottomTabNavigator;