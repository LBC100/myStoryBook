import React, { Component } from 'react';
import { View, Text, StatusBar, Platform } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';


class NavBarAutoHigh extends Component {
    static navigationOptions = {
        title: 'NavBar',
    };

    _getHeight = () => {
        let appHeight = 0;
        if(Platform.OS === 'android') {
            appHeight = StatusBar.currentHeight;
        }else if(isIphoneX()){
            appHeight = 44;
        }else {
            appHeight = 20;
        }
        return appHeight
    }
    render() {
        console.log('状态栏高度',StatusBar.currentHeight);
        const { navigation } = this.props;
        return (
            <View style={{height: this._getHeight(), /* backgroundColor: 'red', */}}>

            </View>
        );
    }
}
 
export default NavBarAutoHigh;