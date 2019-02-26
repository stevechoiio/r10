import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
export default class About extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          style={{ color: "black" }}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 50 }}>{item.title}</Text>
              <Text>
                {item.description} {item.order}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => {
            return <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />;
          }}
        />
      </View>
    );
  }
}
