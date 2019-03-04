import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import ScheduleItem from "../../components/ScheduleItem";
import moment from "moment";
export default class Favourites extends Component {
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
            return <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />;
          }}
          sections={this.props.data}
          keyExtractor={(item, index) => "" + index}
        />
      </View>
    );
  }
}
