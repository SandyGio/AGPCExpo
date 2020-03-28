import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'AGKidsWorship',
      pickerValue: 'AGKidsWorship-3',
      classId: 3,
      modalVisible: false,
      listClasses: [],
      password: ''
    };
    this.listClass = async () => {
      //Do ajax to get all class in list for picker
      var renderPicker = [];
      try {
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/ClassList',
        );
        let responseJson = await response.json();
        responseJson.map((value) => {
          if (value.Name != "Admin") {
            renderPicker.push(<Picker.Item label={value.Name} value={value.Name + "-" + value.id} />)
          }
        })
        return renderPicker;
      } catch (error) {
        console.error(error);
      }
    }
    this.validateLogin = async () => {
      var validationStatus = false;
      try {
        var that = this;

        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/validateLogin', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            classId: that.state.classId,
            password: that.state.password
          })
        })
        let responseJson= await response.json();
        if(responseJson.loginStatus=="ok"){
          this.navigate("Dashboard");
        }
        else if(responseJson.loginStatus=="wrong password"){
          alert("Your password is wrong")
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  navigate = (page) => {
    //Yg manggil ke backend. 

    const { navigate } = this.props.navigation;

    navigate('Home', {
      class: this.state.class,
      classId: this.state.classId,
      password: this.state.password
    });
    this.toggleModal(false)

  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    let classes = this.listClass();
    var that = this;
    classes.then(function (value) {
      var tmpState = { ...that.state };
      tmpState.listClasses = value;
      that.setState(tmpState)
    })
  }
  render() {
    const studentId = this.props.navigation.getParam('studentId');
    return (
      <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
        <Text>{studentId}</Text>
        <TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />

        <Text>Birthday</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Address</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Father</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Mobile</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Email</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Mother</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Mobile</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />
        <Text>Email</Text><TextInput style={styles.textInput} onChangeText={(value) => this.setState({ password: value })} />

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
  logoContainer: {
    width: 200,
    height: 200,
    margin: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },
  logoImg: {
    width: 100,
    height: 150
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
    marginBottom: 20,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  highlight: {
    alignItems: 'center',
    width: '30%',
  },
  button: {
    backgroundColor: '#fcd472',
    padding: '10%',
    borderRadius: 10
  }
});
