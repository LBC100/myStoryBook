/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 10:36:22 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-28 19:28:49
 * 
 * <VerifiCodeBtn
        waitTime={3} // 倒计时时间
        onPress={this._phoneVerifCode} // 点击事件(发送短信请求的函数)
    />
    请求函数的两个回调函数 setSendStatus, success
    _phoneVerifCode = (setSendStatus, success) =>{
        setSendStatus('发送中...');  // 发送中
        setSendStatus(false);  // 发送失败
        success(); // 发送成功
    } 
    
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
class VerifiCodeBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textStatus: true,
            text2: `重新获取(${props.waitTime}s)`,
            waitTime: props.waitTime,
            sendStatus: false,
            countDownStatus: true
        }
    }


    // 点击的时候
    _onClick = () => {
        // 把函数传回父组件
        this.props.onPress && this.props.onPress(this._setSendStatus, this._success);
    }

    // 更改状态函数
    _setSendStatus = (sendStatus) => {
        this.setState({ sendStatus: sendStatus });
    }

    // 发送成功
    _success = () => {
        this.setState({ sendStatus: true }); // 把状态改为真
        this._countDown(); // 执行倒计时
    }

    // 倒计时
    _countDown = () => {
        const { text2, textStatus, waitTime } = this.state;
        const _this = this;
        _this.setState({ sendStatus: true });
        
        let num = waitTime;
        this.timer = setInterval(() => {
            num --;
            if(num < 0) {
                clearInterval(_this.timer);
                _this.setState({ text2: `重新获取${waitTime}s` });
                _this.setState({ sendStatus: false });
                num = waitTime;
            }
            _this.setState({ text2: `重新获取(${num}s)` });
        }, 1000);
    }

    _renderItem = () => {
        const { text2, countDownStatus, sendStatus } = this.state;
        
        if(sendStatus === '发送中...') {
            return <Text style={{fontSize: p(28), color: '#e49b2d'}}>{'发送中...'}</Text>
        } else if(sendStatus === true) {
            // 倒计时
            return <Text style={{fontSize: p(28), color: '#e49b2d'}}>{text2}</Text>
        }else{
            // 点击获取验证码
            return(
                <TouchableWithoutFeedback onPress={this._onClick} style={{height: p(110), /* backgroundColor: 'red', */ justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: p(28), color: '#e49b2d'}}>获取验证码</Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }

    render() {
        return (
            <View>
                {this._renderItem()}
            </View>
        );
    }
}

export default VerifiCodeBtn;