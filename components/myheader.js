import React, { Component } from 'react';
import { View, Text, Image} from 'react-native'
import {Header} from 'react-native-elements'


export default class MyHeader extends Component {

    render(){
        return(
            <View>
                <Header
                leftComponent={<Image style={{height: 80, width:80}} source={require('../assets/logo.png')}/>}
                centerComponent={<Text style={{fontWeight: 'bold', fontSize: 30}}>global posts</Text>} 
                backgroundColor={'skyblue'}
                />
            </View>
        );
    }
}