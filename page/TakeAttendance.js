import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View, Image, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import DatePicker from 'react-native-datepicker';
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

      var x = student_id;
      var arr = this.state.active;

      var statusArray = arr.indexOf(student_id);

      if (statusArray < 0) {
        //If there's no student id in the array of active
        arr.push(x);
      }
      else {
        //if there's student id in the array of active so inactive the student id in array
        arr.splice(statusArray, 1);
      }

      //Set state for rerendering content
      this.setState({
        active: arr
      });
    }

    this.renderStudent = () => {
      var renderValue = [];
      var finalRender = [];
      var ct = 0;

      this.state.students.map((value, key) => {
        var obj;
        var textStyle;

        if (this.state.active.indexOf(value["id"]) > -1) {
          //Check if there's student id in the array, so the border color and the font color will change

          obj = styles.fotoContainerActive;

          textStyle = styles.studentTextActive;

        }
        else {
          //If there's no student id in the array the style will use standard no active
          obj = styles.fotoContainer
          textStyle = styles.studentText
        }

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

          <DatePicker
            style={{ width: 200, backgroundColor: "#FFFFFF", marginBottom: 50 }}
            date={this.state.attendDate}
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
            onDateChange={(date) => {
              this.setState({ attendDate: date });
              const studentData = this.getStudentData();
              var that = this;
              studentData.then(function (value) {
                var tmpState = { ...that.state };
                tmpState.students = value.content;
                tmpState.active = value.active;
                that.setState(tmpState)
              })
              this.renderStudent()
            }}
          />

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
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 10
  },
  fotoContainerActive: {
    width: 100,
    height: 100,
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#228b22',
  },
  text: {
    color: '#3f51b5',
    marginBottom: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
    backgroundColor: '#fcd472',
    padding: '3%',
    borderRadius: 25,
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
  studentTextActive: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center",
    maxWidth: 100,
    color: "#228b22"
  }
});
