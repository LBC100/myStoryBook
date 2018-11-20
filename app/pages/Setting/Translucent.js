import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, Text, Header } from 'react-native-elements';


class Translucent extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={<Text>左</Text>}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={<Text>右</Text>}
                />
                <Card title='HELLO WORLD'>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card>
            </View>
        );
    }
}
 
export default Translucent;