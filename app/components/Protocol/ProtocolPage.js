import React, { Component } from 'react';
import { View, BackHandler, ToastAndroid, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBar from '../NavBar'
import Protocol from './Protocol'
import Images from '../../assets/images/Images';


class ProtocolPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendStatus: false,
            phone: '',
            protocol: false
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
        const { phone, protocol } = this.state;
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
                        {`<Protocol
                        title={'我已阅读并同意'}
                        protocol={protocol}
                        onPress={()=>{this.setState({ protocol: !protocol });}} // 点击取反勾选状态
                        agreement={[<Text style={{color: '#e49b2d', fontSize: p(24)}}>《注册协议》</Text>]} />`}  
                    </Text>
                    <Protocol
                        title={'我已阅读并同意'}
                        protocol={protocol}
                        onPress={()=>{this.setState({ protocol: !protocol });}} // 点击取反勾选状态
                        checkElement={<Image source={Images.bottomTab.BottomBar_03} style={{width: p(26), height: p(26),}}/>}
                        // uncheckedElement={{}}
                        agreement={[<Text style={{color: '#e49b2d', fontSize: p(24)}}>《注册协议》</Text>]} />
                    
                </Card>
            </View>
        );
    }
}
 
export default ProtocolPage;