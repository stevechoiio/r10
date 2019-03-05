import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet
} from "react-native";
import moment from "moment";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import GradientButton from "../../components/GradientButton";
export default class Session extends Component {
  render() {
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
              size={20}
              color={"#cf392a"}
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
        <GradientButton
          link={() => {
            if (this.props.value.faveIDs.includes(this.props.data.id)) {
              this.props.value.removeFaveId(this.props.data.id);
              this.props.navigation.goBack();
            } else {
              this.props.value.setFaveId(this.props.data.id);
            }
          }}
        >
          {this.props.value.faveIDs.includes(this.props.data.id) ? (
            <Text style={styles.favouriteButton}>Remove from Favourite</Text>
          ) : (
            <Text style={styles.favouriteButton}>Add to Favourite</Text>
          )}
        </GradientButton>
      </View>
    );
  }
}
