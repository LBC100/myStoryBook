/*
 * @Author: 李杰涛 
 * @Date: 2018-11-25 19:10:57 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-25 19:22:59
 * 功能: 安卓物理按键返回检测 
 * 用法: 包裹组件
 * <HandleBack _onBack={this._onBack}>Component</HandleBack>
 * 传入的函数this._onBack 执行逻辑 返回布尔值
 */
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';

class HandleBack extends Component {
    constructor(props) {
        super(props);
        this.didFocus = props.navigation.addListener('didFocus', payload => {
            BackHandler.addEventListener('hardwareBackPress', this._onBack)
        })
        this.state = {  }
    }
    componentDidMount() {
        this.willBlur = this.props.navigation.addListener('willBlur', payload => {
            BackHandler.removeEventListener('hardwareBackPress', this._onBack)
        })
    }

    // 执行传入的函数
    _onBack = () => {
        return this.props._onBack();
    }

    componentWillUnmount() {
        this.didFocus.remove();
        this.willBlur.remove();
        BackHandler.removeEventListener('hardwareBackPress', this._onBack)
    }

    render() { 
        return this.props.children;
    }
}
 
export default withNavigation(HandleBack);