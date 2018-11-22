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
                    // backgroundColor={'red'}
                    // statusBarbackgroundColor={'rgba(66,175,240,.2)'}
                    // leftComponent={ { text: '首页', style: {color: 'red'} } }
                    // leftComponent={ <Icon name="angle-left" size={30} color="#000" onClick={()=>{alert(1)}} /> }
                    leftComponent
                    centerComponent={ { text: '首页', style: {color: '333'} } }
                    // rightComponent={ <Icon name="angle-left" size={30} color="#000" onClick={()=>{alert(1)}} /> }
                />
                {/* <NavBarImage /> */}
            </View>
        );
    }
}
 
export default NavBarPage;