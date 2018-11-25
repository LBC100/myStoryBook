/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 15:27:26 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-24 23:01:51
 * 依赖库 react-native-iphone-x-helper
 * 用法
 * 传入文字和文字样式
 * <NavBar 
 *      leftComponent={ { text: '左边', style: {color: '#fff'} } } />
 *  
 * 自定义组件和自定义点击事件 组件的点击必须事件为onClick
 * <NavBar 
 *      leftComponent={ <Icon name="angle-left" size={30} color="#000" onClick={()=>{alert(1)}} /> } />
 * 
 * 左侧默认为返回上级
 * <NavBar 
 *      leftComponent />
 * 
 * 背景颜色  backgroundColor 字符串
 * 状态栏颜色 statusBarbackgroundColor  字符串
 * 
 * centerComponent rightComponent 除去没有默认图标 其他用法同理
 */
import React, { Component } from 'react';
import { View, Text, ImageBackground, Platform, TouchableWithoutFeedback } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import StatusBarAutoHeight from './StatusBarAutoHeight'

class NavBar extends Component {
    
    // 点击事件 传入组件 和默认点击事件
    _onClick = (Component, defaultOnPress) => {
        const { navigation } = this.props;
        if(Component.props && Component.props.onClick) {
            // 自定义点击事件
            Component.props.onClick()
        }else if (Component === true) {
            // 左边默认事件 返回上一级
            navigation.pop()
        }else {
            // 默认点击事件
            defaultOnPress && defaultOnPress()
        }
    }

    // 生成左边组件
    _generateLeftComponent = (leftComponent) => {
        if(leftComponent === true) {
            return <Icon name="angle-left" size={30} color="#000" />
        }else {
            return leftComponent && this._generateChild(leftComponent)
        }
    }
    
    // 生成组件
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
        const { 
            navigation, 
            leftComponent, 
            centerComponent, 
            rightComponent, 
            backgroundColor,
            statusBarbackgroundColor
        } = this.props;
        return (
            <View style={{backgroundColor: backgroundColor ? backgroundColor : '#fff',}}>
                {/* 状态栏 */}
                <StatusBarAutoHeight
                    backgroundColor={statusBarbackgroundColor ? statusBarbackgroundColor : ''}
                />
                <View style={{flexDirection: 'row', height: h(80), alignItems: 'center',}}>
                    
                    {/* 左边元素 */}
                        <View style={{ /* backgroundColor: 'red', */ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', /* paddingLeft: w(50), paddingRight: w(50), */}}>
                            <TouchableWithoutFeedback 
                                onPress={()=>{ this._onClick(leftComponent)}}>
                                <View style={{/* backgroundColor: '#cbf505', */ paddingLeft: w(27), paddingRight: w(27) }}>
                                    {this._generateLeftComponent(leftComponent)}
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    
                    {/* 中间 */}
                    <View style={{ /* backgroundColor: 'red', */ flex: 1, flexDirection: 'row', justifyContent: 'center', /* paddingLeft: w(50), paddingRight: w(50), */}}>
                        <TouchableWithoutFeedback 
                            onPress={()=>{ this._onClick(centerComponent)}}>
                            <View style={{/* backgroundColor: '#cbf505', */ paddingLeft: w(27), paddingRight: w(27) }}>
                                {centerComponent && this._generateChild(centerComponent)}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    {/* 右边元素 */}
                    <View style={{ /* backgroundColor: 'red', */ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', /* paddingLeft: w(50), paddingRight: w(50), */}}>
                        <TouchableWithoutFeedback 
                            onPress={()=>{ this._onClick(rightComponent)}}>
                            <View style={{/* backgroundColor: '#cbf505', */ paddingLeft: w(27), paddingRight: w(27) }}>
                                {rightComponent && this._generateChild(rightComponent)}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </View>
        );
    }
}
 
export default withNavigation(NavBar);