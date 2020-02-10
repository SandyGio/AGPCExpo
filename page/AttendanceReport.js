import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worship: true,
      startDate: "2016-05-15",
      endDate: "2016-06-15"
    }
    this.checkBoxTest = () => {
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
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>

          <CheckBox title="AGKids Worship" checked={this.state.worship} onPress={() => this.checkBoxTest()} />

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Start Date</Text>
            <DatePicker
              style={{ width: 200, backgroundColor: "#FFFFFF" }}
              date={this.state.startDate}
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
              onDateChange={(date) => { this.setState({ startDate: date }) }}
            />
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>End Date</Text>
            <DatePicker
              style={{ width: 200, backgroundColor: "#FFFFFF" }}
              date={this.state.endDate}
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
              onDateChange={(date) => { this.setState({ endDate: date }) }}
            />
          </View>

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
  dateText: {
    color: '#3f51b5',
    fontSize: 15,
    fontWeight: 'bold',
  },
  dateContainer: {
    backgroundColor: "#FFFFFF", 
    flexDirection: "row", 
    alignItems: 'center', 
    marginBottom: 5,
    padding:5
  }
});
