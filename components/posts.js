import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,  } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import { ListItem } from 'react-native-elements'

export default class Posts extends Component {

    render(username){
        return(
            <View style={{ borderWidth: 2, borderRadius: 20, borderColor: '#e9edf6', backgroundColor: '#e9edf6', width: "90%"}}>
                <View
                style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                    <Image 
                    style={styles.profileimg} 
                    source={require("../assets/profileimg.png")}/>
                    <Text
                    style={styles.username}
                    >
                    {username}
                    </Text>
                </View>
                <Image
                style={styles.postimg}
                source={require('../assets/post.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileimg: {
        height: 40,
        width: 40,
        borderWidth: 0,
        borderRadius: "50%",
        marginRight: 20
    },

    username: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'cursive'
    },
    postimg: {
        height: 300,
        width: "95%",
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})