import React, { Component } from 'react';
import { View, Text, SafeAreaView, BackHandler, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';

import StatusBarAutoHeight from '../../components/StatusBarAutoHeight'

class Btns extends Component {
    render() { 
        return (
            <Button
                backgroundColor={'#0f94f6'}
                borderRadius={10}
                raised
                containerViewStyle={{/* width: 100,  */marginBottom: 10}}
                {...this.props}
            />
        );
    }
}

class Setting extends Component {
    static navigationOptions = {
        title: 'app设置',
    };
    
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <GStatusBar />
                <Btns
                    title='沉浸式设置'
                    onPress={()=>{navigation.navigate('')}} />
            </View>
        );
    }
}
 
export default Setting;