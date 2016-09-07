import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={ this.props.style }>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <Greeting style={ this.props.style } name='Rexxar' />
        <Greeting style={ this.props.style } name='Jaina' />
        <Greeting style={ this.props.style } name='Valeera' />
      </View>
    );
  }
}

module.exports = LotsOfGreetings;
