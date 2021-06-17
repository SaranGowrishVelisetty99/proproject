import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, Modal, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import firebase from 'firebase'
import db from '../config'


export default class WelcomeScreen extends Component {

    constructor() {
        super();
        this.state = {
            emailId: '',
            password: '',
            isModalVisible1: false,
            isModalVisible2: false,
            FirstName: '',
            LastName: '',
            Address: '',
            contact: '',
            confirmPassword: '',
        }
    }

    userSignup = (emailId, password, confirmPassword) => {
        console.log(password);
        console.log(confirmPassword);
        if (password !== confirmPassword) {
            alert("password doesn't match \n check your password")
        } else {
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
                .then((response) => {
                    db.collection('users').add({
                        FirstName: this.state.FirstName,
                        LastName: this.state.LastName,
                        Address: this.state.Address,
                        emailId: this.state.emailId,
                        contact: this.state.contact,
                    })
                    return alert(
                        "user added succesfully",
                        '',
                        [
                            { text: 'OK', onPress: () => this.setState({ "isModalVisible1": false }) },
                        ]
                    )
                })
                .catch(function (error) {
                    var errorcode = error.code;
                    var errormessage = error.message;
                    return alert(errormessage)
                })
        }
    }


    userLogin = (emailId,password) => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(()=>{
            //console.log(emailId, password);
            firebase.auth().signInWithEmailAndPassword(emailId,password)
            .then(()=>{
                this.props.navigation.navigate('Posts');
                alert("logged in!!")
            })
            .catch((error)=>{
                //var errorCode = error.code;
                var errorMessage = error.message;
                return alert(errorMessage);
            })
        })
           
          
      }
    showModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible1}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text style={styles.modalTitle}>Donor Registration</Text>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"First Name"}
                                maxLength={8}
                                onChangeText={(text) => {
                                    this.setState({
                                        FirstName: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Last Name"}
                                maxLength={8}
                                onChangeText={(text) => {
                                    this.setState({
                                        LastName: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"contact"}
                                maxLength={10}
                                keyboardType={"numeric"}
                                onChangeText={(text) => {
                                    this.setState({
                                        contact: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"Address"}
                                multiline={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        Address: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"emailId"}
                                keyboardType={'email-address'}
                                onChangeText={(text) => {
                                    this.setState({
                                        emailId: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"password"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"confirm password"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        confirmPassword: text
                                    })
                                }}></TextInput>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.registerButton}
                                    onPress={() => {
                                        this.userSignup(this.state.emailId, this.state.password, this.state.confirmPassword)
                                    }}>
                                    <Text style={styles.registerButtonText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => { this.setState({ "isModalVisible1": false }) }}>
                                    <Text style={{ color: '#ff5722' }}>cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        );
    }

    showModal1 = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible2}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{ width: '100%' }}>
                        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                            <Text style={styles.modalTitle}>LOGIN</Text>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"emailId"}
                                keyboardType={'email-address'}
                                onChangeText={(text) => {
                                    this.setState({
                                        emailId: text
                                    })
                                }}></TextInput>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder={"password"}
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    })
                                }}></TextInput>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.registerButton}
                                    onPress={() => {
                                        this.userLogin(this.state.emailId, this.state.password)
                                    }}>
                                    <Text style={styles.registerButtonText}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBackButton}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => { this.setState({ "isModalVisible2": false }) }}>
                                    <Text style={{ color: '#ff5722' }}>cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        );
    }


    render() {
            return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.showModal()}
                {this.showModal1()}
                </View>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <TouchableOpacity 
                style={styles.login}
                onPress={() => {
                    this.setState({
                        isModalVisible2: true
                    })
                }}>
                    <Text style={styles.loginText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signup}
                    onPress={() => {
                        this.setState({
                            isModalVisible1: true
                        })
                    }}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
    },

    logo: {
        marginLeft: 0,
        marginTop: -50,
        marginBottom: 80,
        height: 80,
        width: 270
    },

    background: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        top: '79%',
        transform: [{ rotate: '180deg' }]
    },

    login: {
        borderWidth: 5,
        display: 'flex',
        justifyContent: 'center',
        alignText: 'center',
        backgroundColor: '#00FFFF',
        paddingLeft: 80,
        paddingRight: 80,
        marginTop: 10,
        borderColor: '#00FFFF',
        borderRadius: 50
    },

    loginText: {
        fontSize: 23,
        alignText: 'center',
        fontWeight: 'bold',
        color: 'black'
    },

    signup: {
        borderWidth: 5,
        display: 'flex',
        justifyContent: 'center',
        alignText: 'center',
        backgroundColor: '#FF0000',
        paddingLeft: 80,
        paddingRight: 80,
        marginTop: 20,
        borderColor: '#FF0000',
        borderRadius: 50
    },

    signupText: {
        fontSize: 23,
        alignText: 'center',
        fontWeight: 'bold',
        color: 'black',
    },

    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    modalTitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: '#ff5722',
        margin: 50,
    },

    modalContainer:{
        flex:1,
        width: '100%',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderRadius:10,
        marginTop:20,
        padding:10
      },
      registerButton:{
        borderWidth: 5,
        display: 'flex',
        justifyContent: 'center',
        alignText: 'center',
        backgroundColor: '#ff5722',
        paddingLeft: 80,
        paddingRight: 80,
        marginTop: 20,
        borderColor: '#ff5722',
        borderRadius: 50
      },
      registerButtonText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      }
})