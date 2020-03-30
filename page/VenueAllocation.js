import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, Image, View } from 'react-native';
import { WebView } from 'react-native-webview';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const className = this.props.navigation.getParam('class');
    const htmlStyleFix = `<style type="text/css">iframe{max-width: 100%;}</style>`;
    const htmlStr = `https://dl.dropbox.com/s/p0ls1s9pixqu7hx/SpecialSun%40Layout-input.jpg?rand=1519633748776`;

    return (
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>
          <Image
            source={{uri:htmlStr}}
          />
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: "5%",
    minHeight:'100%'
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
