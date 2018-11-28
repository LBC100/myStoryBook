/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 10:26:52 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-26 14:18:06
 * 依赖库 react-native-vector-icons
    <Protocol
        protocol={setPsaaProtocol} // 勾选状态
        onPress={()=>{this.setState({ setPsaaProtocol: !setPsaaProtocol });}} // 点击取反勾选状态
        // 协议书可传入多个 类型数组 
        agreement={[<Text style={{color: '#e49b2d', fontSize: p(24)}}>《注册协议》</Text>]} 
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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 协议组件
class Protocol extends Component {
    render() {
        const { protocol, agreement, title, checkElement } = this.props;
        let check = checkElement || <Icon name={'check-box'} size={16} color={'#8ac24b'} />
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: p(24), marginTop: p(110), alignItems: 'center'}}>
                <TouchableOpacity onPress={this.props.onPress} style={{/* backgroundColor: 'red', */ width: p(36), height: p(36), alignItems: 'center', justifyContent: 'center', marginRight: p(10),}}>
                    {/* <Image source={protocol? Images.publicImg.xyg:Images.publicImg.xyg2} style={{width: p(26), height: p(26),}}/> */}
                    {/* {checkElement && checkElement} */}
                    {protocol? check : <Icon name={'check-box-outline-blank'} size={16} color='#999' /> }
                </TouchableOpacity>
                <Text style={{color: '#999', fontSize: p(24)}}>{title? title : '我已阅读并同意'}</Text>
                {/* 协议书 */}
                {agreement && agreement.map((e, i)=><View key={i}>{e}</View>)}
            </View>
        );
    }
}

export default Protocol;