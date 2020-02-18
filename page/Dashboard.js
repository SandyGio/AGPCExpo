import React, { Component } from 'react';
import { Modal, TextInput, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Picker, Button } from 'react-native';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      events:[]
    }
    this.getEvent=async ()=>{
      var renderEvents=[];
      try {
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/getEvent/'+this.props.navigation.state.key+'/'+this.props.navigation.getParam('classId'),
        );
        let responseJson = await response.json();
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        responseJson.content.map((event)=>{
          var nameSplit=event.Name.split("-");
          var date=new Date(event.startTime);
          var thisMonth=months[date.getMonth()];
          var dateEvent=date.getDate()+" "+thisMonth
          renderEvents.push(<View style={styles.card}><Text style={styles.cardContentDate}>{dateEvent}</Text><Text style={styles.cardContent}>{nameSplit[0]}</Text><Text style={styles.cardContent}>{nameSplit[1]}</Text></View>)       
        })
        
        return renderEvents;     
      } catch (error) {
        console.error(error);
      }
    }
  }
  componentDidMount(){

    const getEvents=this.getEvent();
    var that = this;
    getEvents.then(function (value) {
      var tmpState = { ...that.state };
      tmpState.events = value;
      that.setState(tmpState)
    })
  }
  render() {    
    const className = this.props.navigation.getParam('class');
    return (
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>
          <Text style={styles.year}>2020</Text>
          {this.state.events}
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
