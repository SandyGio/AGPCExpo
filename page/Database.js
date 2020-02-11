import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View, Image, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendDate: "2016-05-15",
    }
  }
  render() {
    const className = this.props.navigation.getParam('class');

    return (
      <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>{className}</Text>

        <View>
          <View style={styles.row}>

            <TouchableHighlight testID="1" onPress={() => console.log(this._student1)}>
              <View ref={component => this._student1 = component} style={styles.studentContainer}>
                <View style={styles.fotoContainer}>
                  <Image source={require('../assets/Picture1.jpg')} style={styles.logoImg}></Image>
                </View>
                <Text style={styles.studentText}>Nama Siswa</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log("clicked")}>
              <View style={styles.studentContainer}>
                <View style={styles.fotoContainer}>
                  <Image source={require('../assets/Picture1.jpg')} style={styles.logoImg}></Image>
                </View>
                <Text style={styles.studentText}>Nama Siswa</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => console.log("clicked")}>
              <View style={styles.studentContainer}>
                <View style={styles.fotoContainer}>
                  <Image source={require('../assets/Picture1.jpg')} style={styles.logoImg}></Image>
                </View>
                <Text style={styles.studentText}>Nama Siswa</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: "5%",
  },
  fotoContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 10
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
  logoImg: {
    width: 85,
    height: 85, 
    borderRadius:100
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
  studentContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  studentText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
});
