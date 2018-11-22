import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
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
        return (
            <View>
                <NavBar
                    // leftComponent={ { text: '首页', style: {color: '#fff'} } }
                    leftComponent={ <Icon name="angle-left" size={30} color="#000" onClick={()=>{alert(1)}} /> }
                    centerComponent={ { text: '首页', style: {color: '#fff'} } }
                />
                {/* <NavBarImage /> */}
            </View>
        );
    }
}
 
export default NavBarPage;