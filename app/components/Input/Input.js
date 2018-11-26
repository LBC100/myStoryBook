/*
 * @Author: 李杰涛 
 * @Date: 2018-11-21 11:06:28 
 * @Last Modified by: 未知
 * @Last Modified time: 2018-11-26 11:06:54
 * <Input
        title={'开户支行'}  // 左边文字
        placeholder={'请输入开户支行'}
        rightElement={} // 右边元素
        titleStyle={styles.inputTitleStyle} // 左边文字样式
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


// 导出Input组件
class Input extends Component {
    render() {
        const { title, type, titleStyle, rightElement } = this.props;
        return (
            <View style={[{flexDirection: 'row', height: p(110), alignItems: 'center', borderBottomColor: '#e6e6e6', borderBottomWidth: p(1)}, this.props.containerStyle]}>
                {title && <Text style={[{color: '#333', /* width: p(209), */ fontSize: p(30), paddingRight: p(35)}, titleStyle]}>{title}</Text>}
                <View style={{flexDirection: 'row', flex: 1, alignItems: 'center',  justifyContent: 'space-between'}}>
                    <TextInput
                        style={{fontSize: p(29), color: '#333', flex: 1, /* backgroundColor: '#ccc', */}}
                        {...this.props}
                        underlineColorAndroid='transparent'
                    />
                    {/* 右边元素 */}
                    {rightElement && rightElement}
                </View>
            </View>
        );
    }
}

export default Input;