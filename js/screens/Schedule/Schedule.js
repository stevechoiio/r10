import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  SectionList,
  TouchableHighlight,
  Image
} from "react-native";

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
                onPress={() =>
                  navigate("Session", {
                    description: item.description,
                    title: item.title,
                    speaker: item.speaker.name
                  })
                }
              >
                <View>
                  {/* <Text>{item.speaker.id}</Text> */}
                  <Text>{item.title}</Text>
                  <Text>{item.location}</Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold", backgroundColor: "lightgrey" }}>
              {title}
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
