import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBar from '../../components/NavBar'
import VerifiCodeBtn from './VerifiCodeBtn'


class VerifiCodeBtnPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendStatus: false
        }
    }

    _onClick = () => {
        const _this = this;
        // 模拟请求
        setTimeout(() => {
            _this.setState({ sendStatus: false });
        }, 2000);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <NavBar
                    statusBarbackgroundColor={'rgba(66,175,240,.2)'}
                    leftComponent
                    centerComponent={ { text: '验证码按钮', style: {color: '#333'} } } />
                
                <Card title='VerifiCodeBtn'>
                    <Text style={{marginBottom: 10}}>
                        {'封装验证码组件. 全局搜索 VerifiCodeBtn组件 找到此组件'}
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        {`<VerifiCodeBtn
        waitTime={5}  // 倒计时时间
        onPress={() =>{}} // 点击事件
        success={()=>{}} // 验证码发送成功事件
        failure={()=>{}} // 验证码发送失败事件
        sendStatus={bool} // 发送状态
    />`}  
                    </Text>
                    <VerifiCodeBtn 
                        onPress={() =>{this._onClick()}}
                        sendStatus={this.state.sendStatus}
                        success={()=>{alert('发送成功')}}
                        failure={()=>{alert('发送失败')}}
                        waitTime={5} />
                </Card>
            </View>
        );
    }
}
 
export default VerifiCodeBtnPage;