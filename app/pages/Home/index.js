import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid } from 'react-native';
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

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
    // }
    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    // }

    // _onBackAndroid = () => {
    //     const { navigation } = this.props;
    //     console.log(this.props)
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //         //最近2秒内按过back键，可以退出应用。
    //         BackHandler.exitApp();
    //         return false;
    //     }
    //     if (navigation.state.routeName !== "App") {
    //         console.log(999,navigation);
    //         navigation.pop();
    //         return true;
    //     }

    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     return true;
    // };

    render() {
        const { navigation } = this.props;
        console.log(this.props)
        return (
            <View>
                <StatusBarAutoHeight />
                <Btns
                    title='Inputs'
                    onPress={()=>{navigation.navigate('Inputs')}}
                />

                <Btns
                    title='我是首页1'
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