import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Posts from '../components/posts';

export default class PostScreen extends Component {

    constructor(){
        super();
        this.state = {
            post: []
        }
    }
    
    getPosts =()=>{
        this.requestRef = db.collection("posts")
        .onSnapshot((snapshot)=>{
          var posts = snapshot.docs.map(document => document.data());
          this.setState({
            posts : posts
          });
        })
      }

      componentDidMount(){
        this.getPosts()
      }

      componentWillMount(){
          this.requestRef
      }


    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {this.getPosts}
                <View style={styles.header}>
                    <Image source={require("../assets/logo.png")} style={styles.logo}/>
                </View>
                {this.state.posts.map(
                    post => {
                        <Posts username={post.username}/>
                    }
                )}
                <Text>Post Screen</Text>
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
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
        bottom: 0
    },

    logo: {
        height: 40,
        width: 130
    }
})