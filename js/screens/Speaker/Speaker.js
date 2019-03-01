import React, { Component } from "react";
import { Text, View, FlatList, Button, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class About extends Component {
  render() {
    return (
      <View style={{ margin: 40, backgroundColor: "grey" }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="X"
          color="#841584"
        />
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: `${this.props.data.image}` }}
        />
        <Text>{this.props.data.name}</Text>
        <Text>{this.props.data.bio}</Text>
      </View>
    );
  }
}
