import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View, Image, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
    this.getStudentData = async () => {
      try {
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/Attendance/getStudentList/' + this.props.navigation.getParam('classId'),
        );
        let responseJson = await response.json();
        return responseJson.content;

      } catch (error) {
        console.error(error);
      }
    }
    this.renderStudent = () => {
      var renderValue = [];
      var finalRender = [];
      var ct = 0;
      this.state.students.map((value, key) => {
        if (ct < 3) {
          //Push content per student
          renderValue.push(<TouchableHighlight onPress={() => this.takeAttend(value["id"])}>
            <View style={styles.studentContainer}>
              <View style={styles.fotoContainer}>
                <Image source={value["Avatar"]} style={styles.logoImg}></Image>
              </View>
              <Text style={styles.studentText}>{value["Name"] + " " + value["Surname"]}</Text>
            </View>
          </TouchableHighlight>)
          ct++;
        } else {
          finalRender.push(<View style={styles.row}>{renderValue}</View>);
          renderValue = [];
          ct = 1;
          //Push content per student
          renderValue.push(<TouchableHighlight onPress={() => this.takeAttend(value["id"])}>
            <View style={styles.studentContainer}>
              <View style={styles.fotoContainer}>
                <Image source={value["Avatar"]} style={styles.logoImg}></Image>
              </View>
              <Text style={styles.studentText}>{value["Name"] + " " + value["Surname"]}</Text>
            </View>
          </TouchableHighlight>)
        }
      });
      return finalRender;
    }
  }
  componentDidMount() {
    const studentData = this.getStudentData();
    var that = this;
    console.log(this.state);
    studentData.then(function (value) {
      var tmpState = { ...that.state };
      tmpState.students = value;
      that.setState(tmpState)
    })
  }
  render() {
    const className = this.props.navigation.getParam('class');
    var studenticker = this.renderStudent();

    return (
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.text}>{className}</Text>

          <View>
            {studenticker}
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
    borderRadius: 100
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    marginBottom:20
  },
  studentContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  studentText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center",
    maxWidth: 100
  },
});
