import React from "react";
import { Text, View, TouchableHighlight, Platform } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.title}>{item.title} </Text>
            {fav.faveIDs.includes(item.id) ? (
              <Icon
                style={styles.heartIcon}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color={"#cf392a"}
              />
            ) : null}
          </View>

          <View>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

ScheduleItem.propTypes = {
  item: PropTypes.object,
  fav: PropTypes.object,
  navigate: PropTypes.func
};
