import React from "react";
import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import moment from "moment";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import GradientButton from "../../components/GradientButton";
export const Session = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text style={styles.location}>{props.data.location}</Text>
        {props.value.faveIDs.includes(props.data.id) ? (
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
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.time}>
        {moment(props.data.startTime).format("LT")}
      </Text>
      <View>
        <Text style={styles.content}>{props.data.description}</Text>
        <Text style={{ ...styles.location, marginTop: 10, marginBottom: 10 }}>
          Presented by:
        </Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Speaker", {
              speakerID: props.data.speaker.id
            })
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={{ uri: `${props.data.speaker.image}` }}
            />
            <Text style={{ marginLeft: 10 }}>{props.data.speaker.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          borderStyle: "solid",
          borderWidth: 0.5,
          marginBottom: 10,
          borderColor: "#e6e6e6"
        }}
      />
      <GradientButton
        link={() => {
          if (props.value.faveIDs.includes(props.data.id)) {
            props.value.removeFaveId(props.data.id);
          } else {
            props.value.setFaveId(props.data.id);
          }
        }}
      >
        {props.value.faveIDs.includes(props.data.id) ? (
          <Text style={styles.favouriteButton}>Remove from Favourite</Text>
        ) : (
          <Text style={styles.favouriteButton}>Add to Favourite</Text>
        )}
      </GradientButton>
    </View>
  );
};
