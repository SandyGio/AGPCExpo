import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months : ['January','February','March','April','May','June','July','August','September','October','November','December'],
      tableData: [
        ['05 January', 'Combined Service'],
        ['05 January', 'Combined Service'],
        ['05 January', 'Combined Service'],
        ['05 January', 'Combined Service']
      ],
      events: []
    }

    this.getEventAll = async () => {
      var eventData = [];
      try {
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/getEvent/' + this.props.navigation.state.key + '/' + this.props.navigation.getParam('classId'),
        );
        let responseJson = await response.json();
        responseJson.content.map((value, key) => {
          for (var i = 0; i < value.length; i++) {
            var timeEvent = new Date(value[i].startTime).getDate() + " " + this.state.months[new Date(value[i].startTime).getMonth()];

            if (typeof eventData[key] == 'undefined') {
              eventData[key] = [];
            }

            eventData[key].push([timeEvent, value[i].Name]);
          }
        })

        eventData['year']=new Date(responseJson.content[0][0].startTime).getFullYear(); 
        return eventData;
      } catch (error) {
        console.error(error);
      }
    }
  }
  componentDidMount() {
    const getEvents = this.getEventAll();
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
          <Text style={styles.textClass}>{className}</Text>
          {
            this.state.events.map((value, key) => {
              if(key!='year'){
              return (<View style={{width:"100%", alignItems:'center'}}><Text style={styles.monthYear}>{this.state.months[key]} {this.state.events['year']}</Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
                  <Rows data={this.state.events[key]} textStyle={styles.text} />
                </Table></View>)
              }
            })
          }
        </ImageBackground>
      </ScrollView>
    );
  }
}
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: "5%",
  },
  textClass: {
    color: '#3f51b5',
    marginBottom: '8%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    backgroundColor: '#fcd472',
    padding: '3%',
    borderRadius: 25
  },
  monthYear: {
    color: '#FFFFFF',
    marginBottom: '5%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  containerTable: { backgroundColor: '#fff', width: "80%", marginBottom: "5%" },
  text: { margin: 6 }
});
