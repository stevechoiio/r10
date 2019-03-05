import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import { Session } from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";
import PropTypes from "prop-types";
export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 22
    }
  };
  render() {
    const { navigation } = this.props;

    const sessionID = navigation.getParam("sessionID");

    return (
      <Query
        query={gql`
          query Session($sessionID: ID!) {
            allSessions(filter: { id: $sessionID }) {
              id
              title
              description
              speaker {
                id
                name
                image
              }
              startTime
              location
            }
          }
        `}
        variables={{ sessionID }}
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

          return (
            <FavesContext.Consumer>
              {value => {
                return (
                  <Session
                    navigation={navigation}
                    data={data.allSessions[0]}
                    value={value}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

SessionContainer = {
  navigation: PropTypes.object
};
