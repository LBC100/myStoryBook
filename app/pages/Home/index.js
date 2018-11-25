import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import StatusBarAutoHeight from '../../components/StatusBarAutoHeight'
import HandleBack from '../../components/HandleBack'

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

    _onBack = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
            return false;
        }
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        this.lastBackPressed = Date.now();
        return true
    }

    render() {
        const { navigation } = this.props;
        return (
            <HandleBack _onBack={this._onBack}>
                <View>
                    <StatusBarAutoHeight />
                    <Btns
                        title='Inputs'
                        onPress={()=>{navigation.navigate('Inputs')}}
                    />

                    <Btns
                        title='我是首页2'
                        onPress={()=>{navigation.navigate('Inputs')}}
                    />

                    <Btns
                        title='NavBarPage'
                        onPress={()=>{navigation.navigate('NavBarPage')}}
                    />
                    
                </View>
            </HandleBack>
        );
    }
}
 
export default Home;