import React, { Component } from 'react';
import {StyleSheet, Text, ImageBackground,Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MenuButton from '../components/MenuButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ['05 January','Combined Service'],
        ['05 January','Combined Service'],
        ['05 January','Combined Service'],
        ['05 January','Combined Service']
      ]
    }
  }
  render() {
    const className = this.props.navigation.getParam('class');
    return (
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text style={styles.textClass}>{className}</Text>
          <Text style={styles.monthYear}>January 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>February 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>March 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>April 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>May 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>June 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>July 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>August 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>September 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>October 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>November 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
          <Text style={styles.monthYear}>December 2020</Text>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }} style={styles.containerTable}>
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </Table>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const HEIGHT=Dimensions.get('window').height;

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
  containerTable: { backgroundColor: '#fff', width: "80%", marginBottom:"5%"},
  text: { margin: 6 }
});
