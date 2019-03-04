import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Animated,
  Image
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

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: []
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: "white", margin: 10 }}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
        />
        <View style={{ borderStyle: "solid", borderWidth: 0.5 }} />
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text>
          The R10 conference will take place on Tuesday, June 27,2019 in
          Vancouver,B.C.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        <FlatList
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
