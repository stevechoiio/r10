import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class About extends Component {
  render() {
    return (
      <View>
        <FlatList
          style={{ color: "white" }}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 50 }}>{item.title}</Text>
              <Text>
                {item.description} {item.order}
              </Text>
            </View>
          )}
          ItemSeparatorComponent={() => {
            return <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />;
          }}
        />
      </View>
    );
  }
}
