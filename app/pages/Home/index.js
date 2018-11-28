import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import { data } from '../../config/data'
import StatusBarAutoHeight from '../../components/StatusBarAutoHeight'
import HandleBack from '../../components/HandleBack'
import Images from '../../assets/images/Images';

class Btns extends Component {
    render() { 
        return (
            <Button
                backgroundColor={'#0f94f6'}
                borderRadius={10}
                raised
                containerViewStyle={{/* width: 100,  */marginBottom: 10}}
                {...this.props} />
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

                    {
                        data.map((e, i) => {
                            return <Btns
                                    title={e.title}
                                    onPress={()=>{navigation.navigate(`${e.toPage}`)}} />
                        })
                    }
                    <Image style={{width: 100, height: 100,}} source={{uri: 'http://img0.imgtn.bdimg.com/it/u=1723256192,495732526&fm=26&gp=0.jpg'}} />
                    <Image style={{width: 50, height: 50,}} source={Images.bar.lbt} />
                
                </View>
            </HandleBack>
        );
    }
}
 
export default Home;