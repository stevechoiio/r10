import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  SectionList,
  TouchableHighlight,
  Image,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
export default class Schedule extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.data);
    return (
      <View>
        <SectionList
          renderItem={({ item, index, section }) => (
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
                  {/* <Text>{item.speaker.id}</Text> */}
                  <Text
                    style={Platform.select({
                      ios: { fontFamily: "Montserrat" },
                      android: { fontFamily: "Montserrat-Regular" }
                    })}
                  >
                    {item.title}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text
                      style={
                        Platform.OS === "ios"
                          ? { fontFamily: "Montserrat", color: "#999999" }
                          : { fontFamily: "serif" }
                      }
                    >
                      {item.location}
                    </Text>
                    {this.props.value.faveIDs.includes(item.id) ? (
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
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold", backgroundColor: "lightgrey" }}>
              {moment(title).format("LT")}
            </Text>
          )}
          ItemSeparatorComponent={() => {
            return <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />;
          }}
          sections={this.props.data}
          keyExtractor={(item, index) => "" + index}
        />
      </View>
    );
  }
}
