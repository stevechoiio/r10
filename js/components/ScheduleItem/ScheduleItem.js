import React from "react";
import { Text, View, TouchableHighlight, Platform } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
export const ScheduleItem = ({ item, fav, navigate }) => {
  console.log(item);
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
                size={12}
                color={"red"}
              />
            ) : null}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
