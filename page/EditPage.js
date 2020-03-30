import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: [],
            birthdayDateTime: "",
            id: "",
            name: "",
            surname: "",
            address: "",
            father: "",
            fMobile: "",
            fEmail: "",
            mother: "",
            mMobile: "",
            mEmail: ""
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

        this.saveData = async () => {
            try {
                var that = this;

                let response = await fetch(
                    'http://agpc.tansah.com:7454/application/DB/updateStudentData', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: that.state.id,
                        Name: that.state.name,
                        Surname: that.state.surname,
                        Birthday: that.state.birthdayDateTime,
                        Address: that.state.address,
                        Father: that.state.father,
                        FMobile: that.state.fMobile,
                        FEmail: that.state.fEmail,
                        Mother: that.state.mother,
                        MMobile: that.state.mMobile,
                        MEmail: that.state.mEmail,
                    })
                })
                let responseJson = await response.json();
                console.log(responseJson);

                if (responseJson.status == "ok") {
                    this.navigate();
                }
            }
            catch (error) {
                console.log(error);
            }
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
            console.log(tmpState);

            tmpState.studentData = value;
            tmpState.birthdayDateTime = moment(new Date(value.Birthday)).format('YYYY-MM-DD');
            tmpState.id = value.id;
            tmpState.name = value.Name;
            tmpState.surname = value.Surname;
            tmpState.address = value.Address;
            tmpState.father = value.Father;
            tmpState.fMobile = value.FMobile;
            tmpState.fEmail = value.FEmail;
            tmpState.mother = value.Mother;
            tmpState.mMobile = value.MMobile;
            tmpState.mEmail = value.MEmail;
            console.log(tmpState);
            that.setState(tmpState)
        })
    }
    render() {
        const studentId = this.props.navigation.getParam('studentId');
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const birthdayDate = new Date(this.state.studentData.Birthday);
        const year = birthdayDate.getFullYear();
        const month = birthdayDate.getMonth();
        const date = birthdayDate.getDate();

        return (
            <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
                <TouchableHighlight style={styles.menuIcon} onPress={() => { this.navigate() }}><Text style={{ fontSize: 20 }}>BACK</Text></TouchableHighlight>

                <Image source={{ uri: this.state.studentData.Avatar }} style={styles.logoImg}></Image>
                <TextInput style={styles.nameStyle} value={this.state.name} onChangeText={(value) => this.setState({ name: value })} />
                <TextInput style={styles.nameStyle} value={this.state.surname} onChangeText={(value) => this.setState({ surname: value })} />

                <View style={{ alignItem: 'center', textAlign: 'center', marginTop: 20 }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Birthday</Text>
                    <DatePicker
                        style={{ width: 200, backgroundColor: "#FFFFFF", marginBottom: 5 }}
                        date={this.state.birthdayDateTime}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => {
                            this.setState({ birthdayDateTime: date });
                        }}
                    />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Address</Text><TextInput style={styles.textInput} value={this.state.address} onChangeText={(value) => this.setState({ address: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Father</Text><TextInput style={styles.textInput} value={this.state.father} onChangeText={(value) => this.setState({ father: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mobile</Text><TextInput style={styles.textInput} value={this.state.fMobile} onChangeText={(value) => this.setState({ fMobile: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Email</Text><TextInput style={styles.textInput} value={this.state.fEmail} onChangeText={(value) => this.setState({ fEmail: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mother</Text><TextInput style={styles.textInput} value={this.state.mother} onChangeText={(value) => this.setState({ mother: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Mobile</Text><TextInput style={styles.textInput} value={this.state.mMobile} onChangeText={(value) => this.setState({ mMobile: value })} />
                </View>
                <View style={{ alignItem: 'center', textAlign: 'center' }}>
                    <Text style={{ alignItem: 'center', textAlign: 'center' }}>Email</Text><TextInput style={styles.textInput} value={this.state.mEmail} onChangeText={(value) => this.setState({ mEmail: value })} />
                </View>
                <TouchableHighlight style={{ backgroundColor: "#fcd472", width: "80%", padding: 10, borderRadius: 10 }} onPress={() => this.saveData()}><Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>Save</Text></TouchableHighlight>


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
    containerModal: {
        alignItems: 'center',
        backgroundColor: '#fcd472',
        color: '#0c0f6e',
        padding: 10,
        borderRadius: 10
    },
    modal: {
        flex: 1 / 3,
        alignItems: 'center',
        backgroundColor: '#77d7ed',
        paddingTop: '10%',
        marginTop: '30%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: 25
    },
    innerModal: {
        alignItems: 'center',
        backgroundColor: '#b9eafb',
        padding: 15,
        borderRadius: 25
    },
    text: {
        color: '#101070',
        marginBottom: '10%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        width: 200,
        height: 25,
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
        backgroundColor: '#FFFFFF',
        padding: 5,
        marginBottom: 5,
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
