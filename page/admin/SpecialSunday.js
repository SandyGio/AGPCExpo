import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import MenuButton from '../../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const className = this.props.navigation.getParam('class');
    return (
      <ScrollView>
        <ImageBackground source={require('../../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>
          <Text style={styles.year}>2020</Text>
          <View style={styles.card}>
            <Text style={styles.cardContentDate}>9 February</Text>
            <Text style={styles.cardContent}>UIS4</Text>
            <Text style={styles.cardContent}>Noah and the Ark (Genesis 6-9)</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardContentDate}>9 February</Text>
            <Text style={styles.cardContent}>UIS4</Text>
            <Text style={styles.cardContent}>Noah and the Ark (Genesis 6-9)</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardContentDate}>9 February</Text>
            <Text style={styles.cardContent}>UIS4</Text>
            <Text style={styles.cardContent}>Noah and the Ark (Genesis 6-9)</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardContentDate}>9 February</Text>
            <Text style={styles.cardContent}>UIS4</Text>
            <Text style={styles.cardContent}>Noah and the Ark (Genesis 6-9)</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardContentDate}>9 February</Text>
            <Text style={styles.cardContent}>UIS4</Text>
            <Text style={styles.cardContent}>Noah and the Ark (Genesis 6-9)</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom:"5%"
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
    color:"#3f51b5"
  }
});
