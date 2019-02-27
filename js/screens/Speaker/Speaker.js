import React, { Component } from "react";
import { Text, View, FlatList, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class About extends Component {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="X"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>Speaker Carddd</Text>
        <Text>{this.props.speaker}</Text>
      </View>
    );
  }
}
