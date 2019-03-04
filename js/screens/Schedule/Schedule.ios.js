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
import ScheduleItem from "../../components/ScheduleItem";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
export default class Schedule extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.data);
    return (
      <View>
        <SectionList
          renderItem={({ item, index, section }) => (
            <ScheduleItem
              fav={this.props.value}
              item={item}
              navigate={navigate}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                fontWeight: "bold",
                backgroundColor: "#e6e6e6",
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10
              }}
            >
              {moment(title).format("LT")}
            </Text>
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  borderColor: "#e6e6e6",
                  borderStyle: "solid",
                  borderWidth: 0.5
                }}
              />
            );
          }}
          sections={this.props.data}
          keyExtractor={(item, index) => "" + index}
        />
      </View>
    );
  }
}
