import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
  Header
} from "react-native";
import moment from "moment";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
export default class Session extends Component {
  render() {
    console.log(this.props.value);
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.location}>{this.props.data.location}</Text>
          {this.props.value.faveIDs.includes(this.props.data.id) ? (
            <Icon
              style={{ marginRight: 10, width: 20 }}
              name={Platform.select({
                ios: "ios-heart",
                android: "md-heart"
              })}
              size={12}
              color={"red"}
            />
          ) : null}
        </View>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.time}>
          {moment(this.props.data.startTime).format("LT")}
        </Text>
        <View>
          <Text style={styles.content}>{this.props.data.description}</Text>
          <Text style={styles.location}>Presented by:</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Speaker", {
                speakerID: this.props.data.speaker.id
              })
            }
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ width: 50, height: 50, borderRadius: 25 }}
                source={{ uri: `${this.props.data.speaker.image}` }}
              />
              <Text style={{ marginLeft: 10 }}>
                {this.props.data.speaker.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{ marginTop: 10, borderStyle: "solid", borderWidth: 0.5 }}
        />
        <TouchableOpacity
          style={styles.favouriteButton}
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
        </TouchableOpacity>
      </View>
    );
  }
}
