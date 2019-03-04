import React, { Component } from "react";
import {
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
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
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Text style={styles.codeOfConduct}>
              <Icon
                style={{ fontSize: 30 }}
                name={!this.state.closed ? "ios-remove" : "ios-add"}
              />
              <Text>{this.props.item.title}</Text>
            </Text>
            {!this.state.closed ? (
              <Text style={{ lineHeight: 25 }}>
                {this.props.item.description} {this.props.item.order}
              </Text>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Collapsable;
