import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class About extends Component {
  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
