import React from "react";
import { Text, View, TouchableHighlight, Platform } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
export const ScheduleItem = ({ item, fav, navigate }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          if (item.description) {
            navigate("Session", {
              sessionID: item.id
            });
          }
        }}
        activeOpacity={0.5}
        underlayColor={"#e6e6e6"}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.location}>{item.location}</Text>
            {fav.faveIDs.includes(item.id) ? (
              <Icon
                style={{ marginRight: 10 }}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color={"#cf392a"}
              />
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
