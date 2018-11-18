import { createStackNavigator } from 'react-navigation';

import bottomTabNavigator from './bottomTabNavigator';


export default createStackNavigator(
    {
        bottomTabNavigator: { screen: bottomTabNavigator },
    },
    {
        headerMode: 'none'
    }
);