import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View, Image, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendDate: moment(Date.now()).format('YYYY-MM-DD'),
      students: [],
      active: []
    }

    this.getStudentData = async () => {
      try {
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/Attendance/getStudentList/' + this.props.navigation.getParam('classId') + '/' + this.state.attendDate,
        );
        let responseJson = await response.json();
        return responseJson;

      } catch (error) {
        console.error(error);
      }
    }

    this.takeAttend = (student_id) => {

      console.log(student_id);
      const { navigate } = this.props.navigation;

      navigate('PreviewPage', {
        studentId: student_id
      });

    }

    this.renderStudent = () => {
      var renderValue = [];
      var finalRender = [];
      var ct = 0;

      this.state.students.map((value, key) => {
        var obj = styles.fotoContainer;
        var textStyle = styles.studentText;

        if (ct < 3) {
          //Push content per student
          renderValue.push(<TouchableHighlight onPress={() => this.takeAttend(value["id"])}>
            <View style={styles.studentContainer}>
              <View style={obj}>
                <Image source={{ uri: value["Avatar"] }} style={styles.logoImg}></Image>
              </View>
              <Text style={textStyle}>{value["Name"] + " " + value["Surname"]}</Text>
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
              <View style={obj}>
                <Image source={{ uri: value["Avatar"] }} style={styles.logoImg}></Image>
              </View>
              <Text style={textStyle}>{value["Name"] + " " + value["Surname"]}</Text>
            </View>
          </TouchableHighlight>)
        }
      });

      if (renderValue.length > 0) {
        finalRender.push(<View style={styles.row}>{renderValue}</View>);
      }

      return finalRender;
    }

    this.submitAttendance = async () => {
      try {
        var that = this;
        let response = await fetch(
          'http://agpc.tansah.com:7454/application/DB/submitAttendance', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            active: that.state.active,
            attendDate: that.state.attendDate,
            classId: this.props.navigation.getParam('classId')
          })
        })
        let responseJson = await response.json();
        if (responseJson.status) {
          alert("Attendance has been submitted.")
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  componentDidMount() {
    const studentData = this.getStudentData();
    var that = this;
    studentData.then(function (value) {

      var tmpState = { ...that.state };
      tmpState.students = value.content;
      tmpState.active = value.active;
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

          <TouchableHighlight onPress={() => this.submitAttendance()}>
            <Text style={styles.text}>Submit</Text>
          </TouchableHighlight>
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
    marginBottom: 20
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