import React, { Component } from "react";
import { Text, View, FlatList, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Session extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.description}</Text>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("Speaker", {
              speaker: this.props.speakers
            })
          }
        >
          <View>
            <Text>Presented by:</Text>
            <Text>{this.props.speaker}</Text>
            <TouchableHighlight
              onPress={() => {
                this.props.value.setFaveId(this.props.scheduleID);
              }}
            >
              <Text>asdfasdf</Text>
            </TouchableHighlight>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
