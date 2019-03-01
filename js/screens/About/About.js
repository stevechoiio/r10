import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Animated
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
class Collapsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,
      spinValue: new Animated.Value(0)
    };
  }
  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.animateIcon();
    this.setState({ closed: !this.state.closed });
  };

  animateIcon = () => {
    Animated.timing(this.state.rotateValue, {
      toValue: "360deg",
      duration: 1000
    }).start();
  };
  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    let animatedStyles = {
      transform: [{ translate: this.state.spinValue }]
    };

    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Text style={{ fontSize: 20 }}>
              <Animated.text style={[animatedStyles]}>
                <Icon
                  style={{ fontSize: 30 }}
                  name={!this.state.closed ? "ios-remove" : "ios-add"}
                />
              </Animated.text>

              <Text>{this.props.item.title}</Text>
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
        <Text />
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
