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
import { styles } from "./styles";
import GradientButton from "../../components/GradientButton";
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
            style={styles.bioImage}
            source={{ uri: `${this.props.data.image}` }}
          />
          <Text style={styles.speakerName}>{this.props.data.name}</Text>
          <Text style={styles.speakerBio}>{this.props.data.bio}</Text>
          <GradientButton link={() => Linking.openURL(this.props.data.url)}>
            Learn More about the Speaker
          </GradientButton>
        </View>
      </View>
    );
  }
}
