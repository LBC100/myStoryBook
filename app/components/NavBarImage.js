import React, { Component } from 'react';
import { View, Text, ImageBackground, Platform } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';

import StatusBarAutoHeight from './StatusBarAutoHeight'
import Images from '../assets/images/Images';

class NavBar extends Component {
    static navigationOptions = {
        title: 'NavBar',
    };

    _getHeight = () => {
        let appHeight = 0;
        if(Platform.OS === 'android') {
            appHeight = 0;
        }else if(isIphoneX()){
            appHeight = 25;
        }else {
            appHeight = -5;
        }
        return appHeight
    }
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground style={{height: h(290) + this._getHeight(), width: w(750), backgroundColor: '#ccc',}} source={Images.bar.lbt}>
                <StatusBarAutoHeight />
                <View >
                </View>
            </ImageBackground>
        );
    }
}
 
export default withNavigation(NavBar);