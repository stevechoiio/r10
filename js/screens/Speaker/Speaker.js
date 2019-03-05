import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Image,
  Linking,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
          <TouchableOpacity
            onPress={() => Linking.openURL(this.props.data.url)}
          >
            <View>
              <LinearGradient
                colors={["#47227f", "#9963ea"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={[
                  StyleSheet.absoluteFill,
                  { height: "100%", width: "100%", borderRadius: 30 }
                ]}
              />
              <Text style={{ color: "white", padding: 20 }}>
                Find more about the speaker in Wikipedia
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
