import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import NavBar from '../../components/NavBar'

class NavBarPage extends Component {
    static navigationOptions = {
        title: '组件',
    };
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <NavBar />
            </View>
        );
    }
}
 
export default NavBarPage;