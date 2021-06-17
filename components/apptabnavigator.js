import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Image } from 'react-native'
import LogoutScreen from '../screens/logout'
import PostScreen from '../screens/postscreen'
import ProfileScreen from '../screens/profile'
import UploadScreen from '../screens/uploadscreen'

export const AppTabNavigator = createBottomTabNavigator({

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/profile.png")} style={{width: 20, height: 20}} />,
            tabBarLabel: "Profile",
          }
    },

    Upload: {
        screen: UploadScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/upload.png")} style={{width: 30, height: 30}} />,
            tabBarLabel: "Upload",
          }
    },

    Posts: {
        screen: PostScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/posts.png")} style={{width: 40, height: 40}} />,
            tabBarLabel: "Posts",
          }
    },

    Chats: {
        screen: UploadScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/chat.png")} style={{width: 30, height: 30}} />,
            tabBarLabel: "Chats",
          }
    },

    Logout: {
        screen: LogoutScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/logout.png")} style={{width: 20, height: 20}} />,
            tabBarLabel: "Logout",
          }
    },
})