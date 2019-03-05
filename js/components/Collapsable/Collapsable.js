import React, { Component } from "react";
import {
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import PropTypes from "prop-types";
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

    this.setState({ closed: !this.state.closed });
    this.animateSpin();
  };

  animateSpin = () => {
    this.state.spinValue.setValue(0);
    Animated.timing(this.state.spinValue, {
      duration: 400,
      toValue: 360
    }).start();
  };

  render() {
    const { item } = this.props;
    const rotateIcon = this.state.spinValue.interpolate({
      inputRange: ["0", "360"],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View>
        <TouchableOpacity
          onPress={this.onPress}
          style={{ justifyContent: "center" }}
        >
          <View style={styles.titleContainer}>
            <Animated.View
              style={{
                transform: [{ rotate: rotateIcon }]
              }}
            >
              <Icon
                style={{ fontSize: 15, color: "#9963ea" }}
                name={!this.state.closed ? "ios-remove" : "ios-add"}
              />
            </Animated.View>
            <Text style={{ ...styles.codeOfConduct, fontSize: 15, margin: 5 }}>
              <Text>{this.props.item.title}</Text>
            </Text>
          </View>

          {!this.state.closed ? (
            <Text style={{ lineHeight: 25 }}>
              {this.props.item.description}
            </Text>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Collapsable;
