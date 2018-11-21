import React, { Component } from 'react';
import { View, Text, ImageBackground, Platform } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBarAutoHigh from './NavBarAutoHigh'

class NavBar extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <NavBarAutoHigh />
                <View>
                    <Icon name="rocket" size={30} color="#900" />
                    <Text>1223</Text>
                </View>
            </View>
        );
    }
}
 
export default withNavigation(NavBar);