import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: []
        };

        this.getStudentData = async () => {
            try {
                let response = await fetch(
                    'http://agpc.tansah.com:7454/application/DB/Attendance/getStudentData/' + this.props.navigation.getParam('studentId')
                );
                let responseJson = await response.json();
                return responseJson.content[0];
            } catch (error) {
                console.error(error);
            }
        }

        this.editData = () => {
            const { navigate } = this.props.navigation;

            navigate('EditPage', {
                studentId: this.props.navigation.getParam('studentId')
            });
        }

    }
    navigate = () => {
        //Yg manggil ke backend. 

        const { navigate } = this.props.navigation;

        navigate('Home', {
            class: this.state.class,
            classId: this.state.classId,
            password: this.state.password
        });

    }
    componentDidMount() {
        const getStudentData = this.getStudentData();
        var that = this;
        getStudentData.then(function (value) {
            var tmpState = { ...that.state };
            tmpState.studentData = value;
            that.setState(tmpState)
        })
    }
    render() {
        const studentId = this.props.navigation.getParam('studentId');
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const birthdayDate = new Date(this.state.studentData.Birthday);
        const year = birthdayDate.getFullYear();
        const month = birthdayDate.getMonth();
        const date = birthdayDate.getDate()

        return (
            <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
                <TouchableHighlight style={styles.menuIcon} onPress={() => { this.navigate() }}><Text style={{ fontSize: 20 }}>BACK</Text></TouchableHighlight>
                <Image source={{ uri: this.state.studentData.Avatar }} style={styles.logoImg}></Image>
                <Text style={styles.nameStyle}>{this.state.studentData.Name}</Text>
                <Text style={styles.nameStyle}>{this.state.studentData.Surname}</Text>


                <View style={{ alignItem: 'center', textAlign: 'center', marginTop: 20 }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Birthday</Text><Text style={styles.textInput}>{date} {months[month]} {year}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Address</Text><Text style={styles.textInput}>{this.state.studentData.Address}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Father</Text><Text style={styles.textInput}>{this.state.studentData.Father}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mobile</Text><Text style={styles.textInput}>{this.state.studentData.FMobile}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Email</Text><Text style={styles.textInput}>{this.state.studentData.FEmail}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mother</Text><Text style={styles.textInput}>{this.state.studentData.Mother}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mobile</Text><Text style={styles.textInput}>{this.state.studentData.MMobile}</Text>
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Email</Text><Text style={styles.textInput}>{this.state.studentData.MEmail}</Text>
                </View>
                <TouchableHighlight style={{ backgroundColor: "#fcd472", width: "80%", padding: 10, borderRadius: 10 }} onPress={() => this.editData()}><Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Edit</Text></TouchableHighlight>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 20,
    },
    text: {
        color: '#101070',
        marginBottom: '10%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        width: 200,
        height: 25,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10
    },
    highlight: {
        alignItems: 'center',
        width: '30%',
    },
    nameStyle: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        width: '80%',
        textAlign: 'center',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#fcd472',
        padding: '10%',
        borderRadius: 10
    },
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20,
        fontSize: 20
    }
});
