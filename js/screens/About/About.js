import React, { Component } from "react";
import { Text, View, FlatList, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import Collapsable from "../../components/Collapsable";
import PropTypes from "prop-types";
export const About = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>

      <View style={styles.border} />
      <ScrollView>
        <Text style={{ ...styles.title, fontSize: 15 }}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={{ ...styles.title, fontSize: 15 }}>
          The R10 conference will take place on Tuesday, June 27,2019 in
          Vancouver,B.C.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        <FlatList
          data={props.data.allConducts}
          renderItem={({ item }) => (
            <ScrollView>
              <Collapsable item={item} />
            </ScrollView>
          )}
          keyExtractor={(item, index) => item.id}
        />
        <View
          style={{ borderStyle: "solid", borderWidth: 0.5, marginBottom: 20 }}
        />
        <Text>copyright Red Academy 2019</Text>
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.object
};
