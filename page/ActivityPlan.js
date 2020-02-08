import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const className = this.props.navigation.getParam('class');
    return (
      <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
        <MenuButton navigation={this.props.navigation}/>
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
