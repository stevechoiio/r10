import React, { Component } from "react";
import { Text, View, Button, Image } from "react-native";

export default class Speaker extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black", height: "100%", padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItem: "center",
            marginTop: 10
          }}
        >
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="X"
            color="white"
          />
          <Text style={{ color: "white", marginTop: 10 }}>
            About the Speaker
          </Text>
          <Text />
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            borderRadius: 5,
            padding: 10,
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 120, height: 120, borderRadius: 60 }}
            source={{ uri: `${this.props.data.image}` }}
          />
          <Text style={{ fontSize: 30, paddingTop: 15, paddingBottom: 15 }}>
            {this.props.data.name}
          </Text>
          <Text style={{ fontSize: 17, lineHeight: 24 }}>
            {this.props.data.bio}
          </Text>
        </View>
      </View>
    );
  }
}
