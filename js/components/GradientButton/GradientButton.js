import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import PropTypes from "prop-types";
export const GradientButton = props => {
  return (
    <TouchableOpacity onPress={props.link} style={{ marginTop: 25 }}>
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
        <Text style={styles.wikiButton}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
