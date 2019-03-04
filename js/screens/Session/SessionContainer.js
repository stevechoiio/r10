import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import Session from "./Session";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context";

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
              <ActivityIndicator
                style={{ alignItems: "center" }}
                size="large"
                color="black"
              />
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
