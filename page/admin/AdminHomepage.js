import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import MenuButton from '../../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      class:this.props.class,
      isAdmin:true, 
    }
  }
  render() {
    const className = this.props.navigation.getParam('class');
    return (
      <ImageBackground source={require('../../assets/bg2.jpg')} style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>{className}</Text>
        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 15, margin: 20 }}>
          <Picker selectedValue={this.state.class} style={{ height: 50, width: 170 }} onValueChange={(itemValue, itemIndex) => this.setState({ class: itemValue })}>
            <Picker.Item label="AGKidsWorship" value="AGKidsWorship" />
            <Picker.Item label="PG1" value="PG1" />
          </Picker>

          <TouchableHighlight onPress={() => console.log(this.state.active)}>
            <Text style={styles.text}>Go To Class</Text>
          </TouchableHighlight>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: "5%"
  },
  containerModal: {
    alignItems: 'center',
    backgroundColor: '#fcd472',
    color: '#0c0f6e',
    padding: 10,
    borderRadius: 10
  },
  text: {
    color: '#3f51b5',
    marginBottom: '8%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    backgroundColor: '#fcd472',
    padding: '3%',
    borderRadius: 25
  },
  year: {
    color: '#FFFFFF',
    marginBottom: '10%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: "#fcd472",
    marginBottom: 5,
    width: "90%"
  },
  cardContentDate: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 5,
    padding: 5,
    fontWeight: 'bold'
  },
  cardContent: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 5,
    padding: 5,
    fontWeight: 'bold',
    color: "#3f51b5"
  }
});
