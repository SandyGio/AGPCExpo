import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const className = this.props.navigation.getParam('class');
    
    return (
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: "5%",
  },
  text: {
    color: '#3f51b5',
    marginBottom: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    backgroundColor: '#fcd472',
    padding: '3%',
    borderRadius: 25
  },
});
