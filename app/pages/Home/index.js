import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

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

class Home extends Component {
    static navigationOptions = {
        title: '组件',
    };
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <StatusBarAutoHeight />
                <Btns
                    title='Inputs'
                    onPress={()=>{navigation.navigate('Inputs')}}
                />

                <Btns
                    title='我是首页'
                    onPress={()=>{navigation.navigate('Inputs')}}
                />

                <Btns
                    title='NavBarPage'
                    onPress={()=>{navigation.navigate('NavBarPage')}}
                />
                
            </View>
        );
    }
}
 
export default Home;