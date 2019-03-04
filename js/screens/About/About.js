import React, { Component } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { styles } from "./styles";
import Collapsable from "../../components/Collapsable";

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
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/r10_logo.png")}
          />
        </View>

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
