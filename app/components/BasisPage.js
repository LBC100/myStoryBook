import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBar from '../NavBar'


class ProtocolPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendStatus: false,
            phone: ''
        }
    }

    _onClick = () => {
        const _this = this;
        // 模拟请求
        setTimeout(() => {
            _this.setState({ sendStatus: true });
        }, 2000);
    }

    render() {
        const { navigation } = this.props;
        const { phone } = this.state;
        return (
            <View>
                <NavBar
                    statusBarbackgroundColor={'rgba(66,175,240,.2)'}
                    leftComponent
                    centerComponent={ { text: 'Input', style: {color: '#333'} } } />
                
                <Card title='Input'>
                    <Text style={{marginBottom: 10}}>
                        {'封装验证码组件. 全局搜索 Input组件 找到此组件'}
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        {`
                    <Input
                        title={'手机号'}
                        placeholder={'请输入手机号'}
                        titleStyle={{}}
                        onChangeText={(text) => this.setState({ phone: text })}
                        value={phone}
                        selectTextOnFocus
                        rightElement={
                            <VerifiCodeBtn 
                                onPress={() =>{this._onClick()}}
                                sendStatus={this.state.sendStatus}
                                success={()=>{alert('发送成功')}}
                                failure={()=>{alert('发送失败')}}
                                waitTime={5} />
                        } />`}  
                    </Text>
                    
                </Card>
            </View>
        );
    }
}
 
export default ProtocolPage;