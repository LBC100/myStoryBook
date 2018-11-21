/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 15:27:26 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-21 20:19:38
 * 依赖库 react-native-iphone-x-helper
 */
import React, { Component } from 'react';
import { View, Text, ImageBackground, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBarAutoHigh from './NavBarAutoHigh'

class NavBar extends Component {
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={{backgroundColor: '#999',}}>
                {/* 状态栏 */}
                <NavBarAutoHigh
                    backgroundColor={'rgba(66,175,240,.2)'}
                />
                <View style={{flexDirection: 'row', paddingRight: w(27), height: h(80), alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* 左边元素 */}
                    <TouchableWithoutFeedback 
                        onPress={()=>{navigation.pop()}}
                    >
                        <View style={{backgroundColor: 'red', paddingLeft: w(27), paddingRight: w(27),}}>
                            <Icon name="angle-left" size={30} color="#000" />
                        </View>
                    </TouchableWithoutFeedback>
                    {/* 中间 */}
                    <View>
                        <Text style={{fontSize: p(25)}}>MY TITLE</Text>
                    </View>
                    {/* 右边元素 */}
                    <View>
                        <Icon name="home" size={23} color="#000" />
                    </View>
                </View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        );
    }
}
 
export default withNavigation(NavBar);