import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, View, Image, TouchableHighlight } from 'react-native';
import MenuButton from '../components/MenuButton';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendDate: "2016-05-15",
      students: [
        {
          id: 1,
          name: "chilly",
          pic: ""
        },
        {
          id: 2,
          name: "sandy",
          pic: ""
        },
      ],
      active: []
    }
    this.takeAttend = (student_id) => {
      console.log(student_id);

      var x = student_id;
      var arr = this.state.active;
      var statusArray = arr.indexOf(student_id);
      console.log(statusArray);

      if (statusArray < 0) {
        arr.push(x);
      }
      else {
        arr.splice(statusArray, 1);
      }

      console.log(arr, "After Push");

      this.setState({
        active: arr
      });
    }

    this.renderStudent = () => {
      var renderValue = [];
      this.state.students.map((value, key) => {
        var obj;
        if (this.state.active.indexOf(key) > -1) {
          obj = Object.assign({}, styles.fotoContainer, styles.fotoContainerActive);
        }
        else {
          obj = styles.fotoContainer
        }
        renderValue.push(<TouchableHighlight onPress={() => console.log(this.takeAttend(key))}>
          <View style={styles.studentContainer}>
            <View style={obj}>
              <Image source={require('../assets/Picture1.jpg')} style={styles.logoImg}></Image>
            </View>
            <Text style={styles.studentText}>{value["name"]}</Text>
          </View>
        </TouchableHighlight>)
      });
      return renderValue;
    }
  }
  render() {
    const className = this.props.navigation.getParam('class');
    var studenticker = this.renderStudent();

    return (
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
          onDateChange={(date) => { this.setState({ attendDate: date }) }}
        />

        <View>
          <View style={styles.row}>
            {studenticker}
          </View>
        </View>

        <TouchableHighlight onPress={() => console.log(this.state.active)}>
          <Text style={styles.text}>Submit</Text>
        </TouchableHighlight>
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
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 10
  },
  fotoContainerActive: {
    backgroundColor: 'green',
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
