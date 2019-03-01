import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  LayoutAnimation,
  TouchableOpacity
} from "react-native";

class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true
    };
  }
  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ closed: !this.state.closed });
  };
  // shouldComcoponentUpdate() {
  //   this.setState({ closed: true });
  // }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Text style={{ fontSize: 20 }}>
              {!this.state.closed ? "-" : "+"}
              {this.props.item.title}
            </Text>
            {!this.state.closed ? (
              <Text>
                {this.props.item.description} {this.props.item.order}
              </Text>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: []
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Text>asdf</Text>
        <FlatList
          style={{ color: "black" }}
          data={this.props.data.allConducts}
          renderItem={({ item }) => (
            <View>
              <Collapsable item={item} />
            </View>
          )}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => {
            return <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />;
          }}
        />
      </View>
    );
  }
}
