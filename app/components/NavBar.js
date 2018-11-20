import React, { Component } from 'react';
import { View, Text, ImageBackground, Platform } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';

import NavBarAutoHigh from './NavBarAutoHigh'

class NavBar extends Component {
    static navigationOptions = {
        title: 'NavBar',
    };

    _getHeight = () => {
        let appHeight = 0;
        if(Platform.OS === 'android') {
            appHeight = 0;
        }else if(isIphoneX()){
            appHeight = 20;
        }else {
            appHeight = -4;
        }
        return appHeight
    }
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={{height: h(290) + this._getHeight(), width: w(750), backgroundColor: '#ccc',}} source={require('../assets/img/Bar/lbt.gif')}>
                <NavBarAutoHigh />
                <View >
                </View>
            </ImageBackground>
        );
    }
}
 
export default withNavigation(NavBar);