import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  Platform
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";
export default class Session extends Component {
  render() {
    console.log(this.props.value);
    return (
      <View>
        <Text>{this.props.description}</Text>

        <View>
          {this.props.value.faveIDs.includes(this.props.data.id) ? (
            <Icon
              style={{ marginRight: 10 }}
              name={Platform.select({
                ios: "ios-heart",
                android: "md-heart"
              })}
              size={12}
              color={"red"}
            />
          ) : null}
          <Text>{this.props.data.description}</Text>
          <Text>Presented by:</Text>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate("Speaker", {
                speakerID: this.props.data.speaker.id
              })
            }
          >
            <View>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: `${this.props.data.speaker.image}` }}
              />
              <Text>{this.props.data.speaker.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          style={{ fontSi }}
          onPress={() => {
            if (this.props.value.faveIDs.includes(this.props.data.id)) {
              this.props.value.removeFaveId(this.props.data.id);
              this.props.navigation.goBack();
            } else {
              this.props.value.setFaveId(this.props.data.id);
            }
          }}
        >
          {this.props.value.faveIDs.includes(this.props.data.id) ? (
            <Text>UnFavourite</Text>
          ) : (
            <Text>favourite</Text>
          )}
        </TouchableHighlight>
      </View>
    );
  }
}
