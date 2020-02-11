import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View } from 'react-native';
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
    const htmlStr = `${htmlStyleFix}<p><iframe width="1165" height="655" src="https://www.youtube.com/embed/sJUCMmYsN1A?feature=oembed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`;

    return (
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>

          <WebView
            source={{ html: htmlStr }} // use the custom html string you created above
            bounces={false}         // IOS Only
            dataDetectorTypes='link'
            scalesPageToFit={true}
            scrollEnabled={false}
            automaticallyAdjustContentInsets={false}
            mediaPlaybackRequiresUserAction={true}
            style={{ width: Dimensions.get('window').width - 40, height: Dimensions.get('window').height - 40 }}
          />
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
