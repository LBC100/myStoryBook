/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 15:27:26 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-22 11:13:03
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
    
    // 点击事件 传入组件 和默认点击事件
    _onClick = (Component, defaultOnPress) => {
        if(Component.props && Component.props.onClick) {
            // 自定义点击事件
            Component.props.onClick()
        }else {
            // 默认点击事件
            defaultOnPress && defaultOnPress()
        }
    }

    _generateChild = (value) => {
        if (React.isValidElement(value)) {
            // 如果是组件就直接返回组件
            return value
        } else if (typeof value === 'object') {
            // 如果是对象就返回文字
            const { text } = value;
            return <Text style={[{fontSize: p(25)}, value.style]}>{text}</Text>
        }
    }
    render() {
        const { navigation, leftComponent, centerComponent } = this.props;
        console.log('左边',centerComponent.props)
        return (
            <View style={{backgroundColor: '#999',}}>
                {/* 状态栏 */}
                <NavBarAutoHigh
                    backgroundColor={'rgba(66,175,240,.2)'}
                />
                <View style={{flexDirection: 'row', paddingRight: w(27), height: h(80), alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* 左边元素 */}
                    <TouchableWithoutFeedback 
                        onPress={()=>{ this._onClick(leftComponent, navigation.pop)}}
                    >
                        <View style={{/* backgroundColor: 'red', */ alignItems: 'center', justifyContent: 'center', paddingLeft: w(27), paddingRight: w(27),}}>
                            {leftComponent && this._generateChild(leftComponent)}
                        </View>
                    </TouchableWithoutFeedback>
                    {/* 中间 */}
                    <View>
                        <TouchableWithoutFeedback 
                            onPress={()=>{this._onClick(centerComponent)}}
                        >
                            <View style={{backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', paddingLeft: w(27), paddingRight: w(27),}}>
                                {centerComponent && this._generateChild(centerComponent)}
                            </View>
                        </TouchableWithoutFeedback>
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