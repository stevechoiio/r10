import React, { Component } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { About } from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
              order
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <ActivityIndicator size="large" color="black" />
              </View>
            );

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
