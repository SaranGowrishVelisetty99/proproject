import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class ChatScreen extends Component {
    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.header}>
                    <Image source={require("../assets/logo.png")} style={styles.logo}/>
                </View>
                <Text>Chat Screen</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottomWidth: 4,
        borderColor: 'lightgrey'
    },

    logo: {
        height: 40,
        width: 130
    }
})