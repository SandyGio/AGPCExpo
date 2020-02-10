import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, CheckBox, View } from 'react-native';
import { WebView } from 'react-native-webview';
import MenuButton from '../components/MenuButton';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worship: true
    }
    this.checkBoxTest = () => {
      console.log("clicked");

      this.setState({
        worship: !this.state.worship
      })
    }
  }
  render() {
    const className = this.props.navigation.getParam('class');
    const htmlStyleFix = `<style type="text/css">iframe{max-width: 100%;}</style>`;
    const htmlStr = `${htmlStyleFix}<p><iframe width="1165" height="655" src="https://www.youtube.com/embed/sJUCMmYsN1A?feature=oembed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>`;

    return (
      <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>{className}</Text>
        <View style={{ flexDirection: 'row', backgroundColor:"#FFFFFF" }}>
          <CheckBox text="AGKids Worship" value={this.state.worship} onChange={() => this.checkBoxTest()} />
        </View>

        <WebView
          source={{ html: htmlStr }} // use the custom html string you created above
          bounces={false}         // IOS Only
          dataDetectorTypes='link'
          scalesPageToFit={true}
          scrollEnabled={false}
          automaticallyAdjustContentInsets={false}
          mediaPlaybackRequiresUserAction={true}
          style={{ width: Dimensions.get('window').width - 40 }}
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
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
