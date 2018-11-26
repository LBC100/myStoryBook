/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 10:36:22 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-26 10:46:12
 * 
 * <VerifiCodeBtn
        waitTime={5}  // 倒计时时间
        onPress={() =>{}} // 点击事件
        success={()=>{}} // 验证码发送成功事件
        failure={()=>{}} // 验证码发送失败事件
        sendStatus={bool} // 发送状态
    />
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

// 导出VerifiCodeBtn组件
class VerifiCodeBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textStatus: true,
            text2: `重新获取(${props.waitTime}s)`,
            waitTime: props.waitTime,
            sendStatus: false,
            countDownStatus: false
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('获取验证码',nextProps)
        //  发送代码成功则调用倒计时
        if(nextProps.sendStatus === true) {
            // 更新状态
            this.setState({
                ...this.state,
                sendStatus: nextProps.sendStatus
            });
            // 发送成功要执行的代码
            this._countDown();  // 执行倒计时
            nextProps.success && nextProps.success(); 
            
        }else if(nextProps.sendStatus === false){
            // 发送失败要执行的代码
            nextProps.failure && nextProps.failure();
            // 更新状态
            this.setState({
                ...this.state,
                sendStatus: nextProps.sendStatus
            });
        }
    }

    // 点击的时候
    _onClick = () => {
        this.props.onPress();
        this.setState({ sendStatus: '发送中...' });
    }

    // 倒计时
    _countDown = (status) => {
        const { text2, textStatus, waitTime } = this.state;

        const _this = this;

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
        const { sendStatus, text2, countDownStatus } = this.state;
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