import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import NavBarImage from '../../components/NavBarImage'
import NavBar from '../../components/NavBar'

class NavBarPage extends Component {
    static navigationOptions = {
        title: '组件',
    };
    render() {
        const { navigation } = this.props;
        console.log('NavBarPage', this.props)
        return (
            <View>
                <NavBar
                    statusBarbackgroundColor={'rgba(66,175,240,.2)'}leftComponent
                    centerComponent={ { text: '首页', style: {color: '#333'} } }
                />
                {/* <NavBarImage /> */}
            </View>
        );
    }
}
 
export default NavBarPage;