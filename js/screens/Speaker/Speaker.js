import React from "react";
import { Text, View, Button, Image, Linking } from "react-native";
import { styles } from "./styles";
import GradientButton from "../../components/GradientButton";
import PropTypes from "prop-types";
export const Speaker = props => {
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
          onPress={() => props.navigation.goBack()}
          title="X"
          color="white"
        />
        <Text style={{ color: "white", marginTop: 10 }}>About the Speaker</Text>
        <Text />
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 10,
          alignItems: "center",
          height: "100%"
        }}
      >
        <Image
          style={styles.bioImage}
          source={{ uri: `${props.data.image}` }}
        />
        <Text style={styles.speakerName}>{props.data.name}</Text>
        <Text style={styles.speakerBio}>{props.data.bio}</Text>
        <GradientButton link={() => Linking.openURL(props.data.url)}>
          Learn More about the Speaker
        </GradientButton>
      </View>
    </View>
  );
};
Speaker.propTypes = {
  navigation: PropTypes.object.isRequired,
  data: PropTypes.object
};
