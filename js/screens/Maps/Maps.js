import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class Maps extends Component {
  render() {
    return (
      <View>
        <Text>Maps Screen</Text>
      </View>
    );
  }
}
