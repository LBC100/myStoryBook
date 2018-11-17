import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import Home from '../pages/Home'

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    }
);

export default AppNavigator;